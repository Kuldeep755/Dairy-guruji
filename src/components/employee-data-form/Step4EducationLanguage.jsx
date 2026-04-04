import React from "react";
import { Input } from "../ui/input";

export default function Step4EducationLanguage({ data, setFormData }) {
  // Education Handlers
  const handleEduChange = (index, field, value) => {
    setFormData((prev) => {
      const newEdu = [...prev.education];
      newEdu[index] = { ...newEdu[index], [field]: value };
      return { ...prev, education: newEdu };
    });
  };

  const addEduRow = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { qualification: "", university: "", specialization: "", year: "", grade: "" },
      ],
    }));
  };

  const removeEduRow = (index) => {
    setFormData((prev) => {
      if (prev.education.length <= 1) return prev;
      const newEdu = prev.education.filter((_, i) => i !== index);
      return { ...prev, education: newEdu };
    });
  };

  // Language Handlers
  const handleLangChange = (index, field, value) => {
    setFormData((prev) => {
      const newLang = [...prev.languages];
      newLang[index] = { ...newLang[index], [field]: value };
      return { ...prev, languages: newLang };
    });
  };

  const addLangRow = () => {
    setFormData((prev) => ({
      ...prev,
      languages: [...prev.languages, { language: "", speak: false, write: false }],
    }));
  };

  const removeLangRow = (index) => {
    setFormData((prev) => {
      if (prev.languages.length <= 1) return prev;
      const newLang = prev.languages.filter((_, i) => i !== index);
      return { ...prev, languages: newLang };
    });
  };

  return (
    <div className="space-y-10">
      {/* Education Details */}
      <section>
        <div className="border-b pb-4 mb-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Education Details</h2>
            <p className="text-sm text-gray-500">Provide your academic qualifications starting from the highest.</p>
          </div>
          <button 
            type="button" 
            onClick={addEduRow}
            className="text-sm bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg transition-colors font-semibold"
          >
            + Add Education
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700 text-sm border-b border-gray-200">
                <th className="p-3 font-semibold rounded-tl-lg">Qualification / Degree</th>
                <th className="p-3 font-semibold">University / Board</th>
                <th className="p-3 font-semibold">Specialization</th>
                <th className="p-3 font-semibold w-24">Year</th>
                <th className="p-3 font-semibold w-24">Grade / %</th>
                <th className="p-3 font-semibold w-16 rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.education.map((edu, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="p-2">
                    <Input value={edu.qualification} onChange={(e) => handleEduChange(index, "qualification", e.target.value)} placeholder="e.g. B.Tech" className="h-9 text-sm" />
                  </td>
                  <td className="p-2">
                    <Input value={edu.university} onChange={(e) => handleEduChange(index, "university", e.target.value)} placeholder="University or Board name" className="h-9 text-sm" />
                  </td>
                  <td className="p-2">
                    <Input value={edu.specialization} onChange={(e) => handleEduChange(index, "specialization", e.target.value)} placeholder="e.g. Computer Science" className="h-9 text-sm" />
                  </td>
                  <td className="p-2">
                    <Input type="number" value={edu.year} onChange={(e) => handleEduChange(index, "year", e.target.value)} placeholder="YYYY" className="h-9 text-sm" />
                  </td>
                  <td className="p-2">
                    <Input value={edu.grade} onChange={(e) => handleEduChange(index, "grade", e.target.value)} placeholder="e.g. A / 85%" className="h-9 text-sm" />
                  </td>
                  <td className="p-2 text-center">
                    <button 
                      type="button" 
                      onClick={() => removeEduRow(index)}
                      disabled={data.education.length === 1}
                      className="text-red-500 hover:text-red-700 disabled:text-gray-300 p-1"
                      title="Remove"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Language Proficiency */}
      <section>
        <div className="border-b pb-4 mb-4 flex justify-between items-center mt-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Language Proficiency</h2>
            <p className="text-sm text-gray-500">List languages you know and your proficiency level.</p>
          </div>
          <button 
            type="button" 
            onClick={addLangRow}
            className="text-sm bg-secondary/20 text-yellow-700 hover:bg-secondary hover:text-gray-900 px-3 py-1.5 rounded-lg transition-colors font-semibold"
          >
            + Add Language
          </button>
        </div>

        <div className="max-w-2xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-3 text-sm font-semibold text-gray-700">Language</th>
                <th className="p-3 text-sm font-semibold text-gray-700 text-center w-24">Speak</th>
                <th className="p-3 text-sm font-semibold text-gray-700 text-center w-24">Write</th>
                <th className="p-3 text-sm font-semibold text-gray-700 text-center w-16">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.languages.map((lang, index) => (
                <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="p-3">
                    <Input 
                      value={lang.language} 
                      onChange={(e) => handleLangChange(index, "language", e.target.value)} 
                      placeholder="e.g. English, Hindi, etc." 
                      className="h-9 text-sm" 
                    />
                  </td>
                  <td className="p-3 text-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={lang.speak} 
                        onChange={(e) => handleLangChange(index, "speak", e.target.checked)}
                        className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                    </label>
                  </td>
                  <td className="p-3 text-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={lang.write} 
                        onChange={(e) => handleLangChange(index, "write", e.target.checked)}
                        className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                    </label>
                  </td>
                  <td className="p-3 text-center">
                    <button 
                      type="button" 
                      onClick={() => removeLangRow(index)}
                      disabled={data.languages.length === 1}
                      className="text-red-500 hover:text-red-700 disabled:text-gray-300 p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
