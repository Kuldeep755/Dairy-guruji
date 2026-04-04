import React from "react";
import { Input } from "../ui/input";

export default function Step2AddressEmergency({ data, setFormData, errors = {} }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    const phoneFields = [
      "currentContact",
      "permanentContact",
      "emergencyPhone",
      "emergencySecondaryContact",
    ];

    if (phoneFields.includes(name)) {
      const normalized = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => {
        if (prev.isSameAsCurrent && name === "currentContact") {
          return {
            ...prev,
            currentContact: normalized,
            permanentContact: normalized,
          };
        }
        return { ...prev, [name]: normalized };
      });
      return;
    }

    setFormData((prev) => {
      if (prev.isSameAsCurrent && name === "currentAddress") {
        return {
          ...prev,
          currentAddress: value,
          permanentAddress: value,
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleCopyAddress = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      isSameAsCurrent: checked,
      permanentAddress: checked ? prev.currentAddress : prev.permanentAddress,
      permanentContact: checked ? prev.currentContact : prev.permanentContact,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Address Details */}
      <section>
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Address Details</h2>
          <p className="text-sm text-gray-500">Please provide your contact locations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-primary">Current Home Address</h3>
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Full Address <span className="text-red-500">*</span></label>
              <textarea 
                name="currentAddress" 
                value={data.currentAddress} 
                onChange={handleChange} 
                placeholder="Street, City, State, ZIP"
                aria-invalid={Boolean(errors.currentAddress)}
                className={`flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.currentAddress ? "border-red-500" : "border-input"}`}
              />
              {errors.currentAddress && <p className="text-xs text-red-600">{errors.currentAddress}</p>}
            </div>
            <div className="space-y-3 mt-4">
              <label className="text-sm font-semibold text-gray-700">Contact No. <span className="text-red-500">*</span></label>
              <Input name="currentContact" value={data.currentContact} onChange={handleChange} placeholder="Phone Number" aria-invalid={Boolean(errors.currentContact)} inputMode="numeric" maxLength={10} />
              {errors.currentContact && <p className="text-xs text-red-600">{errors.currentContact}</p>}
            </div>
          </div>

          <div className="space-y-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Permanent Home Address</h3>
              <label className="flex items-center space-x-2 text-sm cursor-pointer ml-4">
                <input 
                  type="checkbox" 
                  checked={data.isSameAsCurrent} 
                  onChange={handleCopyAddress}
                  className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                />
                <span className="text-gray-600 font-medium">Same as Current</span>
              </label>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Full Address <span className="text-red-500">*</span></label>
              <textarea 
                name="permanentAddress" 
                value={data.permanentAddress} 
                onChange={handleChange} 
                disabled={data.isSameAsCurrent}
                placeholder="Street, City, State, ZIP"
                aria-invalid={Boolean(errors.permanentAddress)}
                className={`flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.permanentAddress ? "border-red-500" : "border-input"}`}
              />
              {errors.permanentAddress && <p className="text-xs text-red-600">{errors.permanentAddress}</p>}
            </div>
            <div className="space-y-3 mt-4">
              <label className="text-sm font-semibold text-gray-700">Contact No. <span className="text-red-500">*</span></label>
              <Input 
                name="permanentContact" 
                value={data.permanentContact} 
                onChange={handleChange} 
                disabled={data.isSameAsCurrent}
                aria-invalid={Boolean(errors.permanentContact)}
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone Number" 
              />
              {errors.permanentContact && <p className="text-xs text-red-600">{errors.permanentContact}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section>
        <div className="border-b pb-4 mb-4 mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Emergency Contact Information</h2>
          <p className="text-sm text-gray-500">Who should we contact in case of an emergency?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-50/50 p-6 rounded-xl border border-red-100">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Contact Name <span className="text-red-500">*</span></label>
            <Input name="emergencyContactName" value={data.emergencyContactName} onChange={handleChange} placeholder="Emergency Contact Name" aria-invalid={Boolean(errors.emergencyContactName)} />
            {errors.emergencyContactName && <p className="text-xs text-red-600">{errors.emergencyContactName}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Relationship <span className="text-red-500">*</span></label>
            <Input name="emergencyRelationship" value={data.emergencyRelationship} onChange={handleChange} placeholder="e.g. Spouse, Parent" aria-invalid={Boolean(errors.emergencyRelationship)} />
            {errors.emergencyRelationship && <p className="text-xs text-red-600">{errors.emergencyRelationship}</p>}
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Full Address</label>
            <textarea 
              name="emergencyAddress" 
              value={data.emergencyAddress} 
              onChange={handleChange} 
              placeholder="Their Address"
              className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Primary Phone <span className="text-red-500">*</span></label>
            <Input name="emergencyPhone" value={data.emergencyPhone} onChange={handleChange} placeholder="Primary Contact No." aria-invalid={Boolean(errors.emergencyPhone)} inputMode="numeric" maxLength={10} />
            {errors.emergencyPhone && <p className="text-xs text-red-600">{errors.emergencyPhone}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Secondary Phone (Optional)</label>
            <Input name="emergencySecondaryContact" value={data.emergencySecondaryContact} onChange={handleChange} placeholder="Secondary Contact No." aria-invalid={Boolean(errors.emergencySecondaryContact)} inputMode="numeric" maxLength={10} />
            {errors.emergencySecondaryContact && <p className="text-xs text-red-600">{errors.emergencySecondaryContact}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
