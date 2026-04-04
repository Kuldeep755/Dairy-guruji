import React, { useState } from "react";
import { Input } from "../ui/input";

export default function Step1BasicInfo({ data, setFormData, errors = {} }) {
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [photoUploadError, setPhotoUploadError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files?.[0];

      if (!file) {
        return;
      }

      setPhotoUploadError("");
      setIsUploadingPhoto(true);

      const uploadPhoto = async () => {
        try {
          const formData = new FormData();
          formData.append("file", file);

          const response = await fetch("/api/uploads/employee-photo", {
            method: "POST",
            body: formData,
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result?.error || "Photo upload failed.");
          }

          setFormData((prev) => ({ ...prev, [name]: result.photoUrl || "" }));
        } catch (error) {
          setPhotoUploadError(error.message || "Photo upload failed.");
        } finally {
          setIsUploadingPhoto(false);
        }
      };

      uploadPhoto();
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
        <p className="text-sm text-gray-500">Provide your primary identity and job details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Name Fields */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
          <Input name="firstName" value={data.firstName} onChange={handleChange} placeholder="First Name" aria-invalid={Boolean(errors.firstName)} />
          {errors.firstName && <p className="text-xs text-red-600">{errors.firstName}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Middle Name</label>
          <Input name="middleName" value={data.middleName} onChange={handleChange} placeholder="Middle Name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
          <Input name="lastName" value={data.lastName} onChange={handleChange} placeholder="Last Name" aria-invalid={Boolean(errors.lastName)} />
          {errors.lastName && <p className="text-xs text-red-600">{errors.lastName}</p>}
        </div>

        {/* Job Fields */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Job Title</label>
          <Input name="jobTitle" value={data.jobTitle} onChange={handleChange} placeholder="e.g. Sales Officer" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Department</label>
          <Input name="department" value={data.department} onChange={handleChange} placeholder="e.g. Sales & Marketing" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Report To (Manager)</label>
          <Input name="reportTo" value={data.reportTo} onChange={handleChange} placeholder="Manager's Name" />
        </div>

        {/* Personal Details */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Location / H.Q.</label>
          <Input name="location" value={data.location} onChange={handleChange} placeholder="Headquarters" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Date of Birth <span className="text-red-500">*</span></label>
          <Input type="date" name="dob" value={data.dob} onChange={handleChange} aria-invalid={Boolean(errors.dob)} />
          {errors.dob && <p className="text-xs text-red-600">{errors.dob}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Nationality</label>
          <Input name="nationality" value={data.nationality || "Indian"} onChange={handleChange} placeholder="Nationality" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Blood Group</label>
          <select 
            name="bloodGroup" 
            value={data.bloodGroup} 
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Religion</label>
          <Input name="religion" value={data.religion} onChange={handleChange} placeholder="Religion" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Employee Photo</label>
          <Input type="file" accept="image/*" name="photoUrl" onChange={handleChange} className="cursor-pointer" />
          {isUploadingPhoto ? (
            <p className="text-xs text-blue-600">Uploading photo...</p>
          ) : null}
          {photoUploadError ? (
            <p className="text-xs text-red-600">{photoUploadError}</p>
          ) : null}
          {data.photoUrl ? (
            <div className="mt-2">
              <img
                src={data.photoUrl}
                alt="Employee preview"
                className="h-20 w-20 rounded-lg border border-gray-200 object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <label className="flex items-center space-x-3 mb-4 cursor-pointer">
          <input 
            type="checkbox" 
            name="hasRelatives" 
            checked={data.hasRelatives} 
            onChange={handleChange}
            className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary"
          />
          <span className="font-medium text-gray-700">Do you have any relatives working in this company?</span>
        </label>
        
        {data.hasRelatives && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 p-4 border-l-4 border-primary bg-white rounded-r-lg shadow-sm">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Relative Name <span className="text-red-500">*</span></label>
              <Input name="relativeName" value={data.relativeName} onChange={handleChange} placeholder="Their full name" aria-invalid={Boolean(errors.relativeName)} />
              {errors.relativeName && <p className="text-xs text-red-600">{errors.relativeName}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Relative Department <span className="text-red-500">*</span></label>
              <Input name="relativeDepartment" value={data.relativeDepartment} onChange={handleChange} placeholder="Their department" aria-invalid={Boolean(errors.relativeDepartment)} />
              {errors.relativeDepartment && <p className="text-xs text-red-600">{errors.relativeDepartment}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
