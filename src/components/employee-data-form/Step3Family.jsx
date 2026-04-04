import React from "react";
import { Input } from "../ui/input";

export default function Step3Family({ data, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChildChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedChildren = [...prev.children];
      updatedChildren[index] = { ...updatedChildren[index], [field]: value };
      return { ...prev, children: updatedChildren };
    });
  };

  const handleChildrenCountChange = (e) => {
    const count = parseInt(e.target.value) || 0;
    setFormData((prev) => {
      let currentChildren = [...prev.children];
      if (count > currentChildren.length) {
        // Add new empty children
        for (let i = currentChildren.length; i < count; i++) {
          currentChildren.push({ name: "", profession: "", dob: "" });
        }
      } else if (count < currentChildren.length) {
        // Remove excess children
        currentChildren = currentChildren.slice(0, count);
      }
      return { ...prev, numberOfChildren: e.target.value, children: currentChildren };
    });
  };

  return (
    <div className="space-y-8">
      {/* Basic Personnel Details */}
      <section>
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Personnel Details</h2>
          <p className="text-sm text-gray-500">Provide your personal and marital status details.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Marital Status</label>
            <select 
              name="maritalStatus" 
              value={data.maritalStatus} 
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Date of Marriage</label>
            <Input 
              type="date" 
              name="dateOfMarriage" 
              value={data.dateOfMarriage} 
              onChange={handleChange} 
              disabled={data.maritalStatus !== "Married"}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Number of Children</label>
            <Input 
              type="number" 
              min="0"
              name="numberOfChildren" 
              value={data.numberOfChildren} 
              onChange={handleChildrenCountChange} 
            />
          </div>
        </div>
      </section>

      {/* Family Members */}
      <section>
        <div className="border-b pb-4 mb-4 mt-6">
          <h3 className="text-xl font-bold text-gray-800">Family Members</h3>
          <p className="text-sm text-gray-500">Details of your immediate family.</p>
        </div>

        <div className="space-y-6">
          {/* Father */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Father's Name</label>
              <Input name="fatherName" value={data.fatherName} onChange={handleChange} placeholder="Father's Full Name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Profession</label>
              <Input name="fatherProfession" value={data.fatherProfession} onChange={handleChange} placeholder="Father's Profession" />
            </div>
          </div>

          {/* Mother */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Mother's Name</label>
              <Input name="motherName" value={data.motherName} onChange={handleChange} placeholder="Mother's Full Name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Profession</label>
              <Input name="motherProfession" value={data.motherProfession} onChange={handleChange} placeholder="Mother's Profession" />
            </div>
          </div>

          {/* Spouse */}
          {data.maritalStatus === "Married" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Spouse's Name</label>
                <Input name="spouseName" value={data.spouseName} onChange={handleChange} placeholder="Spouse's Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Profession</label>
                <Input name="spouseProfession" value={data.spouseProfession} onChange={handleChange} placeholder="Spouse's Profession" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Children Section */}
      {data.children.length > 0 && (
        <section>
          <div className="border-b pb-4 mb-4 mt-6">
            <h3 className="text-xl font-bold text-gray-800">Children Details</h3>
          </div>
          
          <div className="space-y-4">
            {data.children.map((child, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-green-50/50 p-4 rounded-lg border border-green-100">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600">Child {index + 1} Name</label>
                  <Input 
                    value={child.name} 
                    onChange={(e) => handleChildChange(index, 'name', e.target.value)} 
                    placeholder="Full Name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600">Profession/Student</label>
                  <Input 
                    value={child.profession} 
                    onChange={(e) => handleChildChange(index, 'profession', e.target.value)} 
                    placeholder="e.g. Student" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600">Date of Birth</label>
                  <Input 
                    type="date" 
                    value={child.dob} 
                    onChange={(e) => handleChildChange(index, 'dob', e.target.value)} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
