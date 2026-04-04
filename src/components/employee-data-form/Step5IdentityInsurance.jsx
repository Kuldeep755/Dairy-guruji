import React from "react";
import { Input } from "../ui/input";

export default function Step5IdentityInsurance({ data, setFormData, errors = {} }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "aadhaarNo" || name === "uanNo") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.replace(/\D/g, "").slice(0, 12),
      }));
      return;
    }
    if (name === "panNo") {
      const normalizedPan = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: normalizedPan }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Identity & Legal Info */}
      <section>
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Identity Details</h2>
          <p className="text-sm text-gray-500">Government compliance and legal identity tracking.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Aadhaar No <span className="text-red-500">*</span></label>
            <Input name="aadhaarNo" value={data.aadhaarNo} onChange={handleChange} placeholder="12-digit Aadhaar" maxLength={12} inputMode="numeric" aria-invalid={Boolean(errors.aadhaarNo)} />
            {errors.aadhaarNo && <p className="text-xs text-red-600">{errors.aadhaarNo}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">PAN Card No <span className="text-red-500">*</span></label>
            <Input name="panNo" value={data.panNo} onChange={handleChange} placeholder="ABCDE1234F" maxLength={10} className="uppercase" aria-invalid={Boolean(errors.panNo)} />
            {errors.panNo && <p className="text-xs text-red-600">{errors.panNo}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">UAN No (EPF)</label>
            <Input name="uanNo" value={data.uanNo} onChange={handleChange} placeholder="12-digit UAN" maxLength={12} inputMode="numeric" aria-invalid={Boolean(errors.uanNo)} />
            {errors.uanNo && <p className="text-xs text-red-600">{errors.uanNo}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">ESI No</label>
            <Input name="esiNo" value={data.esiNo} onChange={handleChange} placeholder="ESI Registration No" />
          </div>
        </div>
      </section>

      {/* Insurance & Vehicle Info */}
      <section>
        <div className="border-b pb-4 mb-4 mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Insurance & Vehicles</h2>
          <p className="text-sm text-gray-500">Details for personal life insurance and registered vehicles.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Life/Personal Insurance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Insurance Company</label>
                <Input name="personalInsuranceCompany" value={data.personalInsuranceCompany} onChange={handleChange} placeholder="e.g. LIC, HDFC Life" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Policy No.</label>
                <Input name="lifeInsuranceNo" value={data.lifeInsuranceNo} onChange={handleChange} placeholder="Policy Number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Validity/Expiry Date</label>
                <Input type="date" name="lifeInsuranceValidity" value={data.lifeInsuranceValidity} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="bg-orange-50/50 p-5 rounded-xl border border-orange-100">
            <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Vehicle & License
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Driving License No.</label>
                <Input name="drivingLicenseNo" value={data.drivingLicenseNo} onChange={handleChange} placeholder="DL No." className="uppercase" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Vehicle Type</label>
                <select 
                  name="vehicleType" 
                  value={data.vehicleType} 
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">None</option>
                  <option value="Two Wheeler">Two Wheeler (Bike/Scooter)</option>
                  <option value="Four Wheeler">Four Wheeler (Car)</option>
                </select>
              </div>
            </div>

            {data.vehicleType && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-orange-200 mt-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Vehicle Reg. No.</label>
                  <Input name="vehicleRegistrationNo" value={data.vehicleRegistrationNo} onChange={handleChange} placeholder="e.g. MH 12 AB 1234" className="uppercase" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Insurance Company</label>
                  <Input name="vehicleInsuranceCompany" value={data.vehicleInsuranceCompany} onChange={handleChange} placeholder="Vehicle Insurance" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Policy Validity</label>
                  <Input type="date" name="vehicleInsuranceValidity" value={data.vehicleInsuranceValidity} onChange={handleChange} />
                </div>
                <div className="space-y-2 md:col-span-3">
                  <label className="text-sm font-semibold text-gray-700">Vehicle Insurance Policy No.</label>
                  <Input name="vehicleInsuranceNo" value={data.vehicleInsuranceNo} onChange={handleChange} placeholder="Vehicle Policy Number" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
