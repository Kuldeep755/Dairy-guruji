import React from "react";
import { Input } from "../ui/input";

export default function Step8PreviewDeclaration({ data, setFormData, errors = {} }) {
  const handleCheckChange = (e) => {
    setFormData((prev) => ({ ...prev, isCorrect: e.target.checked }));
  };

  const handleNameChange = (e) => {
    setFormData((prev) => ({ ...prev, declarationName: e.target.value }));
  };

  const handleDateChange = (e) => {
    setFormData((prev) => ({ ...prev, declarationDate: e.target.value }));
  };

  const SectionDiv = ({ title, children }) => (
    <div className="mb-6 bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
      <h4 className="text-md font-bold text-primary border-b pb-2 mb-4">{title}</h4>
      {children}
    </div>
  );

  const DataRow = ({ label, value }) => (
    <div className="grid grid-cols-3 gap-2 py-1 text-sm">
      <span className="text-gray-500 font-medium col-span-1">{label}</span>
      <span className="text-gray-900 font-semibold col-span-2">{value || "—"}</span>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Preview Section */}
      <section>
        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Preview Data</h2>
          <p className="text-sm text-gray-500">Please review all information before final submission.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-[400px] overflow-y-auto mb-8 custom-scrollbar">
          
          <SectionDiv title="1. Basic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <div>
                <DataRow label="Name" value={`${data.firstName} ${data.middleName} ${data.lastName}`} />
                <DataRow label="Date of Birth" value={data.dob} />
                <DataRow label="Nationality" value={data.nationality} />
                <DataRow label="Blood Group" value={data.bloodGroup} />
                <DataRow label="Religion" value={data.religion} />
              </div>
              <div>
                <DataRow label="Job Title" value={data.jobTitle} />
                <DataRow label="Department" value={data.department} />
                <DataRow label="Report To" value={data.reportTo} />
                <DataRow label="Location" value={data.location} />
              </div>
            </div>
            {data.hasRelatives && (
              <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-100">
                <span className="text-sm font-semibold text-yellow-800 mb-2 block">Relative in Company</span>
                <DataRow label="Relative Name" value={data.relativeName} />
                <DataRow label="Department" value={data.relativeDepartment} />
              </div>
            )}
          </SectionDiv>

          <SectionDiv title="2. Address & Emergency">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-bold uppercase text-gray-400 block mb-2">Current Address</span>
                <p className="text-sm font-semibold text-gray-900 bg-gray-50 p-2 rounded">{data.currentAddress || "—"}</p>
                <DataRow label="Contact" value={data.currentContact} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-gray-400 block mb-2">Permanent Address</span>
                <p className="text-sm font-semibold text-gray-900 bg-gray-50 p-2 rounded">{data.permanentAddress || "—"}</p>
                <DataRow label="Contact" value={data.permanentContact} />
              </div>
            </div>
            <div className="mt-4 border-t pt-4">
              <span className="text-xs font-bold uppercase text-gray-400 block mb-2">Emergency Contact</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DataRow label="Name" value={data.emergencyContactName} />
                <DataRow label="Relationship" value={data.emergencyRelationship} />
                <DataRow label="Primary Phone" value={data.emergencyPhone} />
                <DataRow label="Secondary" value={data.emergencySecondaryContact} />
              </div>
            </div>
          </SectionDiv>

          <SectionDiv title="3. Family Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DataRow label="Marital Status" value={data.maritalStatus} />
              {data.maritalStatus === "Married" && <DataRow label="Date of Marriage" value={data.dateOfMarriage} />}
              <DataRow label="Father" value={`${data.fatherName} (${data.fatherProfession || 'N/A'})`} />
              <DataRow label="Mother" value={`${data.motherName} (${data.motherProfession || 'N/A'})`} />
              {data.maritalStatus === "Married" && <DataRow label="Spouse" value={`${data.spouseName} (${data.spouseProfession || 'N/A'})`} />}
            </div>
            {data.children.length > 0 && (
              <div className="mt-4">
                <span className="text-xs font-bold uppercase text-gray-400 block mb-2">Children ({data.numberOfChildren})</span>
                {data.children.map((c, i) => (
                  <div key={i} className="text-sm text-gray-800 bg-gray-100 p-2 mb-1 rounded flex justify-between">
                    <span>{c.name || "—"}</span>
                    <span className="text-gray-500">{c.profession} | DOB: {c.dob}</span>
                  </div>
                ))}
              </div>
            )}
          </SectionDiv>

          <SectionDiv title="4. Education & Languages">
            <span className="text-xs font-bold uppercase text-gray-400 block mb-2">Education</span>
            <div className="space-y-2 mb-4">
              {data.education.map((edu, i) => (
                <div key={i} className="text-sm bg-gray-100 p-2 rounded flex justify-between items-center">
                  <span className="font-semibold">{edu.qualification || "—"} <span className="font-normal text-gray-600">({edu.specialization})</span></span>
                  <span className="text-gray-500 text-xs">{edu.university} | {edu.year} | {edu.grade}</span>
                </div>
              ))}
            </div>

            <span className="text-xs font-bold uppercase text-gray-400 block mb-2 border-t pt-4">Languages</span>
            <div className="flex flex-wrap gap-2">
              {data.languages.map((lang, i) => lang.language && (
                <div key={i} className="px-3 py-1 bg-blue-50 text-blue-800 text-xs rounded-full border border-blue-200 font-medium">
                  {lang.language} ({(lang.speak ? 'S ' : '')}{(lang.write ? 'W' : '')})
                </div>
              ))}
            </div>
          </SectionDiv>

          <SectionDiv title="5. Identity & Insurance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <DataRow label="Aadhaar No" value={data.aadhaarNo} />
              <DataRow label="PAN No" value={data.panNo} />
              <DataRow label="UAN No" value={data.uanNo} />
              <DataRow label="ESI No" value={data.esiNo} />
              
              <div className="col-span-1 md:col-span-2 border-t my-2"></div>
              
              <DataRow label="Life Insurance" value={`${data.personalInsuranceCompany} - ${data.lifeInsuranceNo}`} />
              <DataRow label="Driving License" value={data.drivingLicenseNo} />
              {data.vehicleType && (
                <>
                  <DataRow label="Vehicle Reg" value={data.vehicleRegistrationNo} />
                  <DataRow label="Vehicle Ins." value={data.vehicleInsuranceCompany} />
                </>
              )}
            </div>
          </SectionDiv>

          <SectionDiv title="6. Employment History">
             {data.employmentHistory.map((emp, i) => emp.organization && (
                <div key={i} className="text-sm bg-gray-100 p-3 rounded mb-2 border-l-4 border-primary">
                  <div className="font-bold text-gray-800">{emp.organization}</div>
                  <div className="text-gray-600 text-xs mt-1">From: {emp.from} | To: {emp.to}</div>
                  <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-gray-200">
                    <div>Mgr: {emp.manager}</div>
                    <div>Salary: {emp.salary}</div>
                    <div className="col-span-2 text-gray-500 italic">Reason: {emp.reason}</div>
                  </div>
                </div>
              ))}
          </SectionDiv>

          <SectionDiv title="7. Nomination">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <DataRow label="Nominee Name" value={data.nomineeName} />
              <DataRow label="Relationship" value={data.nomineeRelationship} />
            </div>
          </SectionDiv>

        </div>
      </section>

      {/* Declaration & Submission Constraint */}
      <section>
        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
             Final Declaration
          </h3>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 text-sm text-gray-700 leading-relaxed mb-6 italic shadow-sm">
            "I hereby declare that all the information furnished by me in this form is true, complete, and correct to the best of my knowledge and belief. I understand that in the event of any information being found false or incorrect at any stage, my employment is liable to be terminated without notice."
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Digital Signature (Name) <span className="text-red-500">*</span></label>
              <Input name="declarationName" value={data.declarationName} onChange={handleNameChange} placeholder="Type your full name" className="bg-white font-serif tracking-wider" aria-invalid={Boolean(errors.declarationName)} />
              {errors.declarationName && <p className="text-xs text-red-600">{errors.declarationName}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Date <span className="text-red-500">*</span></label>
              <Input type="date" name="declarationDate" value={data.declarationDate} onChange={handleDateChange} className="bg-white" aria-invalid={Boolean(errors.declarationDate)} />
              {errors.declarationDate && <p className="text-xs text-red-600">{errors.declarationDate}</p>}
            </div>
          </div>

          <div className="flex items-start bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex items-center h-5 mt-1 cursor-pointer">
              <input 
                id="isCorrectCheckbox"
                type="checkbox" 
                checked={data.isCorrect}
                onChange={handleCheckChange}
                className="w-6 h-6 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 cursor-pointer transition-all"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="isCorrectCheckbox" className="font-bold text-gray-900 cursor-pointer">
                I verify that all information is correct
              </label>
              <p className="text-gray-500 mt-1 cursor-pointer" onClick={() => setFormData((prev) => ({ ...prev, isCorrect: !prev.isCorrect }))}>
                By checking this box, you confirm that you have reviewed the preview data and are ready to submit this form to HR.
              </p>
              {errors.isCorrect && <p className="text-xs text-red-600 mt-2">{errors.isCorrect}</p>}
            </div>
          </div>
          
        </div>
      </section>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
}
