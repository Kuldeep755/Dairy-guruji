import React from "react";
import { Input } from "../ui/input";

export default function Step6EmploymentReferences({ data, setFormData, errors = {} }) {
  // Employment History Handlers
  const handleEmpChange = (index, field, value) => {
    setFormData((prev) => {
      const newEmp = [...prev.employmentHistory];
      newEmp[index] = { ...newEmp[index], [field]: value };
      return { ...prev, employmentHistory: newEmp };
    });
  };

  const addEmpRow = () => {
    setFormData((prev) => ({
      ...prev,
      employmentHistory: [
        ...prev.employmentHistory,
        { from: "", to: "", organization: "", manager: "", salary: "", reason: "" },
      ],
    }));
  };

  const removeEmpRow = (index) => {
    setFormData((prev) => {
      if (prev.employmentHistory.length <= 1) return prev;
      const newEmp = prev.employmentHistory.filter((_, i) => i !== index);
      return { ...prev, employmentHistory: newEmp };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-10">
      {/* Employment History */}
      <section>
        <div className="border-b pb-4 mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Employment History</h2>
            <p className="text-sm text-gray-500">List your previous work experience starting from the most recent.</p>
          </div>
          <button 
            type="button" 
            onClick={addEmpRow}
            className="text-sm bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg transition-colors font-semibold"
          >
            + Add Experience
          </button>
        </div>

        <div className="space-y-6">
          {data.employmentHistory.map((emp, index) => (
            <div key={index} className="relative bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="absolute top-4 right-4">
                <button 
                  type="button" 
                  onClick={() => removeEmpRow(index)}
                  disabled={data.employmentHistory.length === 1}
                  className="text-red-500 hover:bg-red-50 p-1.5 rounded-full disabled:text-gray-300 disabled:hover:bg-transparent transition-colors"
                  title="Remove this experience"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
              </div>
              
              <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Experience {index + 1}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="space-y-2 lg:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Organization Name</label>
                  <Input value={emp.organization} onChange={(e) => handleEmpChange(index, "organization", e.target.value)} placeholder="Company Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Reporting Manager</label>
                  <Input value={emp.manager} onChange={(e) => handleEmpChange(index, "manager", e.target.value)} placeholder="Manager's Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">From Date</label>
                  <Input type="month" value={emp.from} onChange={(e) => handleEmpChange(index, "from", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">To Date</label>
                  <Input type="month" value={emp.to} onChange={(e) => handleEmpChange(index, "to", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Drawn Salary</label>
                  <Input type="number" value={emp.salary} onChange={(e) => handleEmpChange(index, "salary", e.target.value)} placeholder="e.g. 50000" />
                </div>
                <div className="space-y-2 lg:col-span-3">
                  <label className="text-sm font-semibold text-gray-700">Reason for Leaving</label>
                  <Input value={emp.reason} onChange={(e) => handleEmpChange(index, "reason", e.target.value)} placeholder="Brief reason" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section>
        <div className="border-b pb-4 mb-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Professional References</h2>
          <p className="text-sm text-gray-500">Provide details of two professional references (not relatives).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow-50/30 p-6 rounded-xl border border-yellow-100">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-800">Reference 1 Details <span className="text-red-500">*</span></label>
            <textarea 
              name="reference1" 
              value={data.reference1} 
              onChange={handleChange} 
              placeholder="Name, Designation, Company, Phone, Email"
              aria-invalid={Boolean(errors.reference1)}
              className={`flex min-h-[100px] w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.reference1 ? "border-red-500" : "border-input"}`}
            />
            {errors.reference1 && <p className="text-xs text-red-600">{errors.reference1}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-800">Reference 2 Details <span className="text-red-500">*</span></label>
            <textarea 
              name="reference2" 
              value={data.reference2} 
              onChange={handleChange} 
              placeholder="Name, Designation, Company, Phone, Email"
              aria-invalid={Boolean(errors.reference2)}
              className={`flex min-h-[100px] w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.reference2 ? "border-red-500" : "border-input"}`}
            />
            {errors.reference2 && <p className="text-xs text-red-600">{errors.reference2}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
