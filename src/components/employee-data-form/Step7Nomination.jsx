import React from "react";
import { Input } from "../ui/input";

export default function Step7Nomination({ data, setFormData, errors = {} }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      <section>
        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Nomination Form (Legal)</h2>
          <p className="text-sm text-gray-500">Provide nominee details for company benefits and HR compliance.</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 shadow-sm relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <h3 className="text-lg font-bold text-purple-900 mb-6 relative z-10 hidden md:block">Primary Nominee</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Nominee Name <span className="text-red-500">*</span></label>
              <Input name="nomineeName" value={data.nomineeName} onChange={handleChange} placeholder="Full Name of Nominee" className="bg-white" aria-invalid={Boolean(errors.nomineeName)} />
              {errors.nomineeName && <p className="text-xs text-red-600">{errors.nomineeName}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Relationship with Employee <span className="text-red-500">*</span></label>
              <Input name="nomineeRelationship" value={data.nomineeRelationship} onChange={handleChange} placeholder="e.g. Spouse, Mother, Son" className="bg-white" aria-invalid={Boolean(errors.nomineeRelationship)} />
              {errors.nomineeRelationship && <p className="text-xs text-red-600">{errors.nomineeRelationship}</p>}
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">Nominee Address <span className="text-red-500">*</span></label>
              <textarea 
                name="nomineeAddress" 
                value={data.nomineeAddress} 
                onChange={handleChange} 
                placeholder="Complete residing address"
                aria-invalid={Boolean(errors.nomineeAddress)}
                className={`flex w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 min-h-[80px] ${errors.nomineeAddress ? "border-red-500" : "border-input"}`}
              />
              {errors.nomineeAddress && <p className="text-xs text-red-600">{errors.nomineeAddress}</p>}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="border-b pb-4 mb-6 mt-8">
          <h3 className="text-xl font-bold text-gray-800">Witness Details</h3>
          <p className="text-sm text-gray-500">Nomination must be witnessed by two individuals (can be colleagues).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Witness 1 Details <span className="text-red-500">*</span></label>
            <textarea 
              name="witness1" 
              value={data.witness1} 
              onChange={handleChange} 
              placeholder="Name, Signature info, Address/Department"
              aria-invalid={Boolean(errors.witness1)}
              className={`flex min-h-[80px] w-full rounded-md border bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.witness1 ? "border-red-500" : "border-input"}`}
            />
            {errors.witness1 && <p className="text-xs text-red-600">{errors.witness1}</p>}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Witness 2 Details <span className="text-red-500">*</span></label>
            <textarea 
              name="witness2" 
              value={data.witness2} 
              onChange={handleChange} 
              placeholder="Name, Signature info, Address/Department"
              aria-invalid={Boolean(errors.witness2)}
              className={`flex min-h-[80px] w-full rounded-md border bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.witness2 ? "border-red-500" : "border-input"}`}
            />
            {errors.witness2 && <p className="text-xs text-red-600">{errors.witness2}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
