"use client";

import { useMemo, useState } from "react";

function formatDateTime(value) {
  if (!value) {
    return "-";
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

function valueOrDash(value) {
  if (value === undefined || value === null) return "-";
  const text = String(value).trim();
  return text ? text : "-";
}

function FieldCard({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-700 break-words">
        {valueOrDash(value)}
      </p>
    </div>
  );
}

function EditableField({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) {
  return (
    <label className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <input
        type={type}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-700 outline-none focus:border-[#1f7d46] focus:ring-2 focus:ring-[#1f7d46]/20"
      />
    </label>
  );
}

function EditableCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      <input
        type="checkbox"
        checked={Boolean(checked)}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4"
      />
    </label>
  );
}

export default function EmployeeDataTable({ initialEmployees = [] }) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [loadingId, setLoadingId] = useState(null);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [viewingId, setViewingId] = useState(null);
  const [editingEntry, setEditingEntry] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  const total = employees.length;

  const viewingData = useMemo(() => {
    if (!viewingId) return null;
    return employees.find((item) => item.id === viewingId) || null;
  }, [employees, viewingId]);
  const viewedForm = viewingData?.employeeData || {};

  function startEdit(item) {
    setEditingEntry(item);
    const data = item.employeeData || {};
    setEditFormData(data);
  }

  function setEditValue(field, value) {
    setEditFormData((prev) => ({ ...(prev || {}), [field]: value }));
  }

  function updateArrayFieldItem(field, index, key, value) {
    setEditFormData((prev) => {
      const current = Array.isArray(prev?.[field]) ? prev[field] : [];
      const updated = current.map((item, itemIndex) =>
        itemIndex === index ? { ...(item || {}), [key]: value } : item,
      );
      return { ...(prev || {}), [field]: updated };
    });
  }

  function addArrayFieldItem(field, defaultItem) {
    setEditFormData((prev) => {
      const current = Array.isArray(prev?.[field]) ? prev[field] : [];
      return { ...(prev || {}), [field]: [...current, defaultItem] };
    });
  }

  function removeArrayFieldItem(field, index) {
    setEditFormData((prev) => {
      const current = Array.isArray(prev?.[field]) ? prev[field] : [];
      const updated = current.filter((_, itemIndex) => itemIndex !== index);
      return { ...(prev || {}), [field]: updated };
    });
  }

  async function saveEdit() {
    if (!editingEntry || !editFormData) return;

    setLoadingId(editingEntry.id);
    try {
      const response = await fetch(
        `/api/admin/employee-data-form/${editingEntry.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ employeeData: editFormData }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to update employee form.");
      }

      setEmployees((prev) =>
        prev.map((item) => (item.id === editingEntry.id ? data.employee : item)),
      );

      setStatusMessage({
        type: "success",
        text: data?.message || "Employee form updated successfully.",
      });

      setEditingEntry(null);
      setEditFormData(null);
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: error.message || "Unable to update employee form.",
      });
    } finally {
      setLoadingId(null);
    }
  }

  async function deleteEntry(id) {
    const confirmed = window.confirm(
      "Delete this employee form entry? This action cannot be undone.",
    );
    if (!confirmed) return;

    setLoadingId(id);
    try {
      const response = await fetch(`/api/admin/employee-data-form/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to delete employee form.");
      }

      setEmployees((prev) => prev.filter((item) => item.id !== id));
      if (viewingId === id) {
        setViewingId(null);
      }

      setStatusMessage({
        type: "success",
        text: data?.message || "Employee form deleted successfully.",
      });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: error.message || "Unable to delete employee form.",
      });
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <>
      <header>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-black text-[#172432] mt-1 tracking-tight">
            Employee Data Forms
          </h1>

          <div className="inline-flex items-center gap-2 rounded-xl bg-white/80 border border-white px-4 py-2.5 shadow-sm">
            <span className="text-sm font-bold text-slate-700">
              Total Submissions: {total}
            </span>
          </div>
        </div>
      </header>

      {statusMessage.text ? (
        <div
          className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
            statusMessage.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {statusMessage.text}
        </div>
      ) : null}

      <section className="rounded-[2rem] border border-white/60 bg-white/70 shadow-sm backdrop-blur-xl overflow-hidden flex flex-col">
        {employees.length === 0 ? (
          <p className="px-6 py-8 text-sm font-medium text-slate-500">
            No employee data form submissions found yet.
          </p>
        ) : (
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-transparent border-b border-primary/10">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Job Title
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Department
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Submitted At
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((item) => {
                  const isBusy = loadingId === item.id;
                  return (
                    <tr
                      key={item.id}
                      className="border-b border-primary/5 hover:bg-white/50 transition align-top"
                    >
                      <td className="px-6 py-4 font-bold text-[#172432] whitespace-nowrap">
                        #{item.id}
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">
                        {item.firstName} {item.lastName}
                      </td>
                      <td className="px-6 py-4 text-slate-600 whitespace-nowrap">
                        {item.jobTitle || "-"}
                      </td>
                      <td className="px-6 py-4 text-slate-600 whitespace-nowrap">
                        {item.department || "-"}
                      </td>
                      <td className="px-6 py-4 text-slate-600 whitespace-nowrap">
                        {item.currentContact || "-"}
                      </td>
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                        {formatDateTime(item.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <div className="inline-flex gap-2">
                          <button
                            type="button"
                            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                            onClick={() => setViewingId(item.id)}
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                            onClick={() => startEdit(item)}
                            disabled={isBusy}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100 disabled:opacity-60"
                            onClick={() => deleteEntry(item.id)}
                            disabled={isBusy}
                          >
                            {isBusy ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {viewingData ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 sm:p-8 overflow-auto">
          <div className="w-full max-w-5xl rounded-2xl border border-white/60 bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#172432]">
                Employee Form #{viewingData.id}
              </h2>
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => setViewingId(null)}
              >
                Close
              </button>
            </div>

            <div className="max-h-[72vh] space-y-5 overflow-auto pr-1">
              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xl font-bold text-slate-800">
                      {valueOrDash(viewedForm.firstName)}{" "}
                      {valueOrDash(viewedForm.middleName) === "-"
                        ? ""
                        : valueOrDash(viewedForm.middleName)}{" "}
                      {valueOrDash(viewedForm.lastName)}
                    </p>
                    <p className="text-sm text-slate-500">
                      {valueOrDash(viewedForm.jobTitle)} |{" "}
                      {valueOrDash(viewedForm.department)}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Submitted: {formatDateTime(viewingData.createdAt)}
                    </p>
                  </div>

                  {viewedForm.photoUrl ? (
                    <img
                      src={viewedForm.photoUrl}
                      alt="Employee"
                      className="h-24 w-24 rounded-xl border border-slate-200 object-cover"
                    />
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-slate-300 text-xs font-semibold text-slate-400">
                      No Image
                    </div>
                  )}
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <FieldCard label="Date of Birth" value={viewedForm.dob} />
                  <FieldCard label="Nationality" value={viewedForm.nationality} />
                  <FieldCard label="Blood Group" value={viewedForm.bloodGroup} />
                  <FieldCard label="Religion" value={viewedForm.religion} />
                  <FieldCard label="Report To" value={viewedForm.reportTo} />
                  <FieldCard label="Location" value={viewedForm.location} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Address and Emergency
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <FieldCard label="Current Address" value={viewedForm.currentAddress} />
                  <FieldCard label="Current Contact" value={viewedForm.currentContact} />
                  <FieldCard label="Permanent Address" value={viewedForm.permanentAddress} />
                  <FieldCard label="Permanent Contact" value={viewedForm.permanentContact} />
                  <FieldCard
                    label="Emergency Contact Name"
                    value={viewedForm.emergencyContactName}
                  />
                  <FieldCard
                    label="Emergency Relationship"
                    value={viewedForm.emergencyRelationship}
                  />
                  <FieldCard label="Emergency Address" value={viewedForm.emergencyAddress} />
                  <FieldCard label="Emergency Phone" value={viewedForm.emergencyPhone} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Family Details
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <FieldCard label="Marital Status" value={viewedForm.maritalStatus} />
                  <FieldCard label="Date of Marriage" value={viewedForm.dateOfMarriage} />
                  <FieldCard
                    label="Number of Children"
                    value={viewedForm.numberOfChildren}
                  />
                  <FieldCard label="Father Name" value={viewedForm.fatherName} />
                  <FieldCard label="Father Profession" value={viewedForm.fatherProfession} />
                  <FieldCard label="Mother Name" value={viewedForm.motherName} />
                  <FieldCard label="Mother Profession" value={viewedForm.motherProfession} />
                  <FieldCard label="Spouse Name" value={viewedForm.spouseName} />
                  <FieldCard label="Spouse Profession" value={viewedForm.spouseProfession} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Education
                </h3>
                {Array.isArray(viewedForm.education) && viewedForm.education.length > 0 ? (
                  <div className="space-y-2">
                    {viewedForm.education.map((edu, index) => (
                      <div
                        key={`edu-${index}`}
                        className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 md:grid-cols-5"
                      >
                        <FieldCard label="Qualification" value={edu?.qualification} />
                        <FieldCard label="University" value={edu?.university} />
                        <FieldCard label="Specialization" value={edu?.specialization} />
                        <FieldCard label="Year" value={edu?.year} />
                        <FieldCard label="Grade" value={edu?.grade} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">No education entries.</p>
                )}
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Languages
                </h3>
                {Array.isArray(viewedForm.languages) && viewedForm.languages.length > 0 ? (
                  <div className="space-y-2">
                    {viewedForm.languages.map((lang, index) => (
                      <div
                        key={`lang-${index}`}
                        className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 md:grid-cols-3"
                      >
                        <FieldCard label="Language" value={lang?.language} />
                        <FieldCard
                          label="Speak"
                          value={lang?.speak ? "Yes" : "No"}
                        />
                        <FieldCard
                          label="Write"
                          value={lang?.write ? "Yes" : "No"}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">No language entries.</p>
                )}
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Employment History
                </h3>
                {Array.isArray(viewedForm.employmentHistory) &&
                viewedForm.employmentHistory.length > 0 ? (
                  <div className="space-y-2">
                    {viewedForm.employmentHistory.map((job, index) => (
                      <div
                        key={`job-${index}`}
                        className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 md:grid-cols-3"
                      >
                        <FieldCard label="From" value={job?.from} />
                        <FieldCard label="To" value={job?.to} />
                        <FieldCard label="Organization" value={job?.organization} />
                        <FieldCard label="Manager" value={job?.manager} />
                        <FieldCard label="Salary" value={job?.salary} />
                        <FieldCard label="Reason" value={job?.reason} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">No employment history entries.</p>
                )}
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Identity and Insurance
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <FieldCard label="Aadhaar No" value={viewedForm.aadhaarNo} />
                  <FieldCard label="PAN No" value={viewedForm.panNo} />
                  <FieldCard label="UAN No" value={viewedForm.uanNo} />
                  <FieldCard label="ESI No" value={viewedForm.esiNo} />
                  <FieldCard
                    label="Life Insurance Company"
                    value={viewedForm.personalInsuranceCompany}
                  />
                  <FieldCard
                    label="Life Insurance No"
                    value={viewedForm.lifeInsuranceNo}
                  />
                  <FieldCard
                    label="Life Insurance Validity"
                    value={viewedForm.lifeInsuranceValidity}
                  />
                  <FieldCard
                    label="Vehicle Insurance Company"
                    value={viewedForm.vehicleInsuranceCompany}
                  />
                  <FieldCard
                    label="Vehicle Insurance No"
                    value={viewedForm.vehicleInsuranceNo}
                  />
                  <FieldCard
                    label="Vehicle Insurance Validity"
                    value={viewedForm.vehicleInsuranceValidity}
                  />
                  <FieldCard
                    label="Driving License No"
                    value={viewedForm.drivingLicenseNo}
                  />
                  <FieldCard
                    label="Vehicle Registration No"
                    value={viewedForm.vehicleRegistrationNo}
                  />
                  <FieldCard label="Vehicle Type" value={viewedForm.vehicleType} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  References and Nomination
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <FieldCard label="Reference 1" value={viewedForm.reference1} />
                  <FieldCard label="Reference 2" value={viewedForm.reference2} />
                  <FieldCard label="Nominee Name" value={viewedForm.nomineeName} />
                  <FieldCard
                    label="Nominee Relationship"
                    value={viewedForm.nomineeRelationship}
                  />
                  <FieldCard
                    label="Nominee Address"
                    value={viewedForm.nomineeAddress}
                  />
                  <FieldCard label="Witness 1" value={viewedForm.witness1} />
                  <FieldCard label="Witness 2" value={viewedForm.witness2} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Declaration
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <FieldCard
                    label="Declaration Name"
                    value={viewedForm.declarationName}
                  />
                  <FieldCard
                    label="Declaration Date"
                    value={viewedForm.declarationDate}
                  />
                  <FieldCard
                    label="Information Correct"
                    value={viewedForm.isCorrect ? "Yes" : "No"}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}

      {editingEntry ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 sm:p-8 overflow-auto">
          <div className="w-full max-w-5xl rounded-2xl border border-white/60 bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#172432]">
                Edit Employee Form #{editingEntry.id}
              </h2>
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  setEditingEntry(null);
                  setEditFormData(null);
                }}
                disabled={loadingId === editingEntry.id}
              >
                Close
              </button>
            </div>

            <div className="max-h-[70vh] space-y-4 overflow-auto pr-1">
              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xl font-bold text-slate-800">
                      {valueOrDash(editFormData?.firstName)}{" "}
                      {valueOrDash(editFormData?.middleName) === "-"
                        ? ""
                        : valueOrDash(editFormData?.middleName)}{" "}
                      {valueOrDash(editFormData?.lastName)}
                    </p>
                    <p className="text-sm text-slate-500">
                      {valueOrDash(editFormData?.jobTitle)} |{" "}
                      {valueOrDash(editFormData?.department)}
                    </p>
                  </div>
                  {editFormData?.photoUrl ? (
                    <img
                      src={editFormData.photoUrl}
                      alt="Employee"
                      className="h-24 w-24 rounded-xl border border-slate-200 object-cover"
                    />
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-slate-300 text-xs font-semibold text-slate-400">
                      No Image
                    </div>
                  )}
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <EditableField label="First Name" value={editFormData?.firstName || ""} onChange={(v) => setEditValue("firstName", v)} />
                  <EditableField label="Middle Name" value={editFormData?.middleName || ""} onChange={(v) => setEditValue("middleName", v)} />
                  <EditableField label="Last Name" value={editFormData?.lastName || ""} onChange={(v) => setEditValue("lastName", v)} />
                  <EditableField label="Job Title" value={editFormData?.jobTitle || ""} onChange={(v) => setEditValue("jobTitle", v)} />
                  <EditableField label="Department" value={editFormData?.department || ""} onChange={(v) => setEditValue("department", v)} />
                  <EditableField label="Report To" value={editFormData?.reportTo || ""} onChange={(v) => setEditValue("reportTo", v)} />
                  <EditableField label="Location" value={editFormData?.location || ""} onChange={(v) => setEditValue("location", v)} />
                  <EditableField label="Date Of Birth" type="date" value={editFormData?.dob || ""} onChange={(v) => setEditValue("dob", v)} />
                  <EditableField label="Photo URL" value={editFormData?.photoUrl || ""} onChange={(v) => setEditValue("photoUrl", v)} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Contact and Family
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <EditableField label="Current Contact" value={editFormData?.currentContact || ""} onChange={(v) => setEditValue("currentContact", v)} />
                  <EditableField label="Current Address" value={editFormData?.currentAddress || ""} onChange={(v) => setEditValue("currentAddress", v)} />
                  <EditableField label="Permanent Contact" value={editFormData?.permanentContact || ""} onChange={(v) => setEditValue("permanentContact", v)} />
                  <EditableField label="Permanent Address" value={editFormData?.permanentAddress || ""} onChange={(v) => setEditValue("permanentAddress", v)} />
                  <EditableField label="Father Name" value={editFormData?.fatherName || ""} onChange={(v) => setEditValue("fatherName", v)} />
                  <EditableField label="Mother Name" value={editFormData?.motherName || ""} onChange={(v) => setEditValue("motherName", v)} />
                  <EditableField label="Spouse Name" value={editFormData?.spouseName || ""} onChange={(v) => setEditValue("spouseName", v)} />
                  <EditableField label="Marital Status" value={editFormData?.maritalStatus || ""} onChange={(v) => setEditValue("maritalStatus", v)} />
                  <EditableField label="Number Of Children" value={editFormData?.numberOfChildren || ""} onChange={(v) => setEditValue("numberOfChildren", v)} />
                  <EditableField label="Date Of Marriage" type="date" value={editFormData?.dateOfMarriage || ""} onChange={(v) => setEditValue("dateOfMarriage", v)} />
                  <EditableField label="Father Profession" value={editFormData?.fatherProfession || ""} onChange={(v) => setEditValue("fatherProfession", v)} />
                  <EditableField label="Mother Profession" value={editFormData?.motherProfession || ""} onChange={(v) => setEditValue("motherProfession", v)} />
                  <EditableField label="Spouse Profession" value={editFormData?.spouseProfession || ""} onChange={(v) => setEditValue("spouseProfession", v)} />
                  <EditableField label="Emergency Contact Name" value={editFormData?.emergencyContactName || ""} onChange={(v) => setEditValue("emergencyContactName", v)} />
                  <EditableField label="Emergency Relationship" value={editFormData?.emergencyRelationship || ""} onChange={(v) => setEditValue("emergencyRelationship", v)} />
                  <EditableField label="Emergency Address" value={editFormData?.emergencyAddress || ""} onChange={(v) => setEditValue("emergencyAddress", v)} />
                  <EditableField label="Emergency Phone" value={editFormData?.emergencyPhone || ""} onChange={(v) => setEditValue("emergencyPhone", v)} />
                  <EditableField label="Emergency Secondary Contact" value={editFormData?.emergencySecondaryContact || ""} onChange={(v) => setEditValue("emergencySecondaryContact", v)} />
                  <EditableField label="Relative Name" value={editFormData?.relativeName || ""} onChange={(v) => setEditValue("relativeName", v)} />
                  <EditableField label="Relative Department" value={editFormData?.relativeDepartment || ""} onChange={(v) => setEditValue("relativeDepartment", v)} />
                  <EditableCheckbox label="Has Relatives In Company" checked={editFormData?.hasRelatives} onChange={(v) => setEditValue("hasRelatives", v)} />
                  <EditableCheckbox label="Permanent Same As Current" checked={editFormData?.isSameAsCurrent} onChange={(v) => setEditValue("isSameAsCurrent", v)} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Identity and Insurance
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <EditableField label="Aadhaar No" value={editFormData?.aadhaarNo || ""} onChange={(v) => setEditValue("aadhaarNo", v)} />
                  <EditableField label="PAN No" value={editFormData?.panNo || ""} onChange={(v) => setEditValue("panNo", v)} />
                  <EditableField label="UAN No" value={editFormData?.uanNo || ""} onChange={(v) => setEditValue("uanNo", v)} />
                  <EditableField label="ESI No" value={editFormData?.esiNo || ""} onChange={(v) => setEditValue("esiNo", v)} />
                  <EditableField label="Life Insurance Company" value={editFormData?.personalInsuranceCompany || ""} onChange={(v) => setEditValue("personalInsuranceCompany", v)} />
                  <EditableField label="Life Insurance No" value={editFormData?.lifeInsuranceNo || ""} onChange={(v) => setEditValue("lifeInsuranceNo", v)} />
                  <EditableField label="Life Insurance Validity" type="date" value={editFormData?.lifeInsuranceValidity || ""} onChange={(v) => setEditValue("lifeInsuranceValidity", v)} />
                  <EditableField label="Vehicle Insurance Company" value={editFormData?.vehicleInsuranceCompany || ""} onChange={(v) => setEditValue("vehicleInsuranceCompany", v)} />
                  <EditableField label="Vehicle Insurance No" value={editFormData?.vehicleInsuranceNo || ""} onChange={(v) => setEditValue("vehicleInsuranceNo", v)} />
                  <EditableField label="Vehicle Insurance Validity" type="date" value={editFormData?.vehicleInsuranceValidity || ""} onChange={(v) => setEditValue("vehicleInsuranceValidity", v)} />
                  <EditableField label="Driving License No" value={editFormData?.drivingLicenseNo || ""} onChange={(v) => setEditValue("drivingLicenseNo", v)} />
                  <EditableField label="Vehicle Registration No" value={editFormData?.vehicleRegistrationNo || ""} onChange={(v) => setEditValue("vehicleRegistrationNo", v)} />
                  <EditableField label="Vehicle Type" value={editFormData?.vehicleType || ""} onChange={(v) => setEditValue("vehicleType", v)} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  References, Nominee and Declaration
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <EditableField label="Reference 1" value={editFormData?.reference1 || ""} onChange={(v) => setEditValue("reference1", v)} />
                  <EditableField label="Reference 2" value={editFormData?.reference2 || ""} onChange={(v) => setEditValue("reference2", v)} />
                  <EditableField label="Nominee Name" value={editFormData?.nomineeName || ""} onChange={(v) => setEditValue("nomineeName", v)} />
                  <EditableField label="Nominee Relationship" value={editFormData?.nomineeRelationship || ""} onChange={(v) => setEditValue("nomineeRelationship", v)} />
                  <EditableField label="Nominee Address" value={editFormData?.nomineeAddress || ""} onChange={(v) => setEditValue("nomineeAddress", v)} />
                  <EditableField label="Witness 1" value={editFormData?.witness1 || ""} onChange={(v) => setEditValue("witness1", v)} />
                  <EditableField label="Witness 2" value={editFormData?.witness2 || ""} onChange={(v) => setEditValue("witness2", v)} />
                  <EditableField label="Declaration Name" value={editFormData?.declarationName || ""} onChange={(v) => setEditValue("declarationName", v)} />
                  <EditableField label="Declaration Date" type="date" value={editFormData?.declarationDate || ""} onChange={(v) => setEditValue("declarationDate", v)} />
                  <EditableCheckbox label="Is Correct" checked={editFormData?.isCorrect} onChange={(v) => setEditValue("isCorrect", v)} />
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Education
                </h3>
                {(editFormData?.education || []).map((edu, index) => (
                  <div key={`edit-edu-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 flex justify-between">
                      <p className="text-xs font-semibold text-slate-500">Education #{index + 1}</p>
                      <button
                        type="button"
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                        onClick={() => removeArrayFieldItem("education", index)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
                      <EditableField label="Qualification" value={edu?.qualification || ""} onChange={(v) => updateArrayFieldItem("education", index, "qualification", v)} />
                      <EditableField label="University" value={edu?.university || ""} onChange={(v) => updateArrayFieldItem("education", index, "university", v)} />
                      <EditableField label="Specialization" value={edu?.specialization || ""} onChange={(v) => updateArrayFieldItem("education", index, "specialization", v)} />
                      <EditableField label="Year" value={edu?.year || ""} onChange={(v) => updateArrayFieldItem("education", index, "year", v)} />
                      <EditableField label="Grade" value={edu?.grade || ""} onChange={(v) => updateArrayFieldItem("education", index, "grade", v)} />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="rounded-lg border border-[#1f7d46]/30 bg-[#1f7d46]/10 px-3 py-1.5 text-xs font-semibold text-[#1f7d46] hover:bg-[#1f7d46]/20"
                  onClick={() =>
                    addArrayFieldItem("education", {
                      qualification: "",
                      university: "",
                      specialization: "",
                      year: "",
                      grade: "",
                    })
                  }
                >
                  + Add Education
                </button>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Languages
                </h3>
                {(editFormData?.languages || []).map((lang, index) => (
                  <div key={`edit-lang-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 flex justify-between">
                      <p className="text-xs font-semibold text-slate-500">Language #{index + 1}</p>
                      <button
                        type="button"
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                        onClick={() => removeArrayFieldItem("languages", index)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <EditableField label="Language" value={lang?.language || ""} onChange={(v) => updateArrayFieldItem("languages", index, "language", v)} />
                      <label className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Speak</span>
                        <input
                          type="checkbox"
                          className="ml-3 h-4 w-4"
                          checked={Boolean(lang?.speak)}
                          onChange={(event) => updateArrayFieldItem("languages", index, "speak", event.target.checked)}
                        />
                      </label>
                      <label className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Write</span>
                        <input
                          type="checkbox"
                          className="ml-3 h-4 w-4"
                          checked={Boolean(lang?.write)}
                          onChange={(event) => updateArrayFieldItem("languages", index, "write", event.target.checked)}
                        />
                      </label>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="rounded-lg border border-[#1f7d46]/30 bg-[#1f7d46]/10 px-3 py-1.5 text-xs font-semibold text-[#1f7d46] hover:bg-[#1f7d46]/20"
                  onClick={() =>
                    addArrayFieldItem("languages", {
                      language: "",
                      speak: false,
                      write: false,
                    })
                  }
                >
                  + Add Language
                </button>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Employment History
                </h3>
                {(editFormData?.employmentHistory || []).map((job, index) => (
                  <div key={`edit-job-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 flex justify-between">
                      <p className="text-xs font-semibold text-slate-500">Job #{index + 1}</p>
                      <button
                        type="button"
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                        onClick={() => removeArrayFieldItem("employmentHistory", index)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <EditableField label="From" value={job?.from || ""} onChange={(v) => updateArrayFieldItem("employmentHistory", index, "from", v)} />
                      <EditableField label="To" value={job?.to || ""} onChange={(v) => updateArrayFieldItem("employmentHistory", index, "to", v)} />
                      <EditableField label="Organization" value={job?.organization || ""} onChange={(v) => updateArrayFieldItem("employmentHistory", index, "organization", v)} />
                      <EditableField label="Manager" value={job?.manager || ""} onChange={(v) => updateArrayFieldItem("employmentHistory", index, "manager", v)} />
                      <EditableField label="Salary" value={job?.salary || ""} onChange={(v) => updateArrayFieldItem("employmentHistory", index, "salary", v)} />
                      <EditableField label="Reason" value={job?.reason || ""} onChange={(v) => updateArrayFieldItem("employmentHistory", index, "reason", v)} />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="rounded-lg border border-[#1f7d46]/30 bg-[#1f7d46]/10 px-3 py-1.5 text-xs font-semibold text-[#1f7d46] hover:bg-[#1f7d46]/20"
                  onClick={() =>
                    addArrayFieldItem("employmentHistory", {
                      from: "",
                      to: "",
                      organization: "",
                      manager: "",
                      salary: "",
                      reason: "",
                    })
                  }
                >
                  + Add Employment
                </button>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                  Children
                </h3>
                {(editFormData?.children || []).map((child, index) => (
                  <div key={`edit-child-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 flex justify-between">
                      <p className="text-xs font-semibold text-slate-500">Child #{index + 1}</p>
                      <button
                        type="button"
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                        onClick={() => removeArrayFieldItem("children", index)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <EditableField label="Name" value={child?.name || ""} onChange={(v) => updateArrayFieldItem("children", index, "name", v)} />
                      <EditableField label="Profession" value={child?.profession || ""} onChange={(v) => updateArrayFieldItem("children", index, "profession", v)} />
                      <EditableField label="DOB" type="date" value={child?.dob || ""} onChange={(v) => updateArrayFieldItem("children", index, "dob", v)} />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="rounded-lg border border-[#1f7d46]/30 bg-[#1f7d46]/10 px-3 py-1.5 text-xs font-semibold text-[#1f7d46] hover:bg-[#1f7d46]/20"
                  onClick={() =>
                    addArrayFieldItem("children", {
                      name: "",
                      profession: "",
                      dob: "",
                    })
                  }
                >
                  + Add Child
                </button>
              </section>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  setEditingEntry(null);
                  setEditFormData(null);
                }}
                disabled={loadingId === editingEntry.id}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-lg border border-[#1f7d46] bg-[#1f7d46] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1a6539] disabled:opacity-70"
                onClick={saveEdit}
                disabled={loadingId === editingEntry.id}
              >
                {loadingId === editingEntry.id ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
