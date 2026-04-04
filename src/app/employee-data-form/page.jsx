"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Step1BasicInfo from "../../components/employee-data-form/Step1BasicInfo";
import Step2AddressEmergency from "../../components/employee-data-form/Step2AddressEmergency";
import Step3Family from "../../components/employee-data-form/Step3Family";
import Step4EducationLanguage from "../../components/employee-data-form/Step4EducationLanguage";
import Step5IdentityInsurance from "../../components/employee-data-form/Step5IdentityInsurance";
import Step6EmploymentReferences from "../../components/employee-data-form/Step6EmploymentReferences";
import Step7Nomination from "../../components/employee-data-form/Step7Nomination";
import Step8PreviewDeclaration from "../../components/employee-data-form/Step8PreviewDeclaration";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";

const STEPS = [
  "Basic Info",
  "Address & Emergency",
  "Family Details",
  "Education & Language",
  "Identity & Insurance",
  "Employment history",
  "Nomination",
  "Preview & Submit",
];
const EMPLOYEE_FORM_DRAFT_KEY = "employee-data-form-draft-v1";

export default function EmployeeDataForm() {
  const router = useRouter();
  const isDraftHydrated = useRef(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [stepErrors, setStepErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: "", middleName: "", lastName: "", reportTo: "", jobTitle: "", department: "",
    location: "", dob: "", nationality: "", bloodGroup: "", religion: "", photoUrl: "",
    hasRelatives: false, relativeName: "", relativeDepartment: "",
    
    // Step 2: Address & Emergency
    currentAddress: "", currentContact: "", isSameAsCurrent: false,
    permanentAddress: "", permanentContact: "",
    emergencyContactName: "", emergencyRelationship: "", emergencyAddress: "",
    emergencyPhone: "", emergencySecondaryContact: "",
    
    // Step 3: Family Info
    maritalStatus: "Single", dateOfMarriage: "", numberOfChildren: "0",
    fatherName: "", fatherProfession: "",
    motherName: "", motherProfession: "",
    spouseName: "", spouseProfession: "",
    children: [], // { name, profession, dob }
    
    // Step 4: Education & Language
    education: [{ qualification: "", university: "", specialization: "", year: "", grade: "" }],
    languages: [{ language: "", speak: false, write: false }],
    
    // Step 5: Identity & Insurance
    aadhaarNo: "", panNo: "", uanNo: "", esiNo: "",
    personalInsuranceCompany: "", lifeInsuranceNo: "", lifeInsuranceValidity: "",
    vehicleInsuranceCompany: "", vehicleInsuranceNo: "", vehicleInsuranceValidity: "",
    drivingLicenseNo: "", vehicleRegistrationNo: "", vehicleType: "",
    
    // Step 6: Employment & References
    employmentHistory: [{ from: "", to: "", organization: "", manager: "", salary: "", reason: "" }],
    reference1: "", reference2: "",
    
    // Step 7: Nomination Form
    nomineeName: "", nomineeRelationship: "", nomineeAddress: "",
    witness1: "", witness2: "",
    
    // Step 8: Declaration
    declarationName: "", declarationDate: "", isCorrect: false
  });

  useEffect(() => {
    try {
      const draftRaw = localStorage.getItem(EMPLOYEE_FORM_DRAFT_KEY);
      if (!draftRaw) {
        isDraftHydrated.current = true;
        return;
      }

      const draft = JSON.parse(draftRaw);
      if (draft?.formData && typeof draft.formData === "object") {
        setFormData((prev) => ({ ...prev, ...draft.formData }));
      }
      if (
        typeof draft?.currentStep === "number" &&
        draft.currentStep >= 1 &&
        draft.currentStep <= STEPS.length
      ) {
        setCurrentStep(draft.currentStep);
      }

      setStatusMessage({
        type: "success",
        text: "Saved draft restored.",
      });
    } catch {
      // Ignore malformed draft and continue with default state.
    } finally {
      isDraftHydrated.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isDraftHydrated.current) return;

    const serializableFormData = {
      ...formData,
      photoUrl:
        typeof formData.photoUrl === "object" ? "" : formData.photoUrl || "",
    };

    localStorage.setItem(
      EMPLOYEE_FORM_DRAFT_KEY,
      JSON.stringify({
        formData: serializableFormData,
        currentStep,
        updatedAt: Date.now(),
      }),
    );
  }, [formData, currentStep]);

  useEffect(() => {
    if (!statusMessage.text) return;
    const timer = setTimeout(() => {
      setStatusMessage({ type: "", text: "" });
    }, 4000);
    return () => clearTimeout(timer);
  }, [statusMessage]);

  const isBlank = (value) => !String(value || "").trim();
  const digitsOnly = (value) => String(value || "").replace(/\D/g, "");
  const isValidIndianMobile = (value) => /^[6-9]\d{9}$/.test(digitsOnly(value));
  const isValidAadhaar = (value) => /^\d{12}$/.test(digitsOnly(value));
  const isValidPan = (value) => /^[A-Z]{5}\d{4}[A-Z]$/.test(String(value || "").trim().toUpperCase());
  const isValidUan = (value) => /^\d{12}$/.test(digitsOnly(value));

  const validateStep = (step, data) => {
    const errors = {};

    switch (step) {
      case 1:
        if (isBlank(data.firstName)) errors.firstName = "First name is required.";
        if (isBlank(data.lastName)) errors.lastName = "Last name is required.";
        if (isBlank(data.dob)) errors.dob = "Date of birth is required.";
        if (data.hasRelatives && isBlank(data.relativeName)) {
          errors.relativeName = "Relative name is required.";
        }
        if (data.hasRelatives && isBlank(data.relativeDepartment)) {
          errors.relativeDepartment = "Relative department is required.";
        }
        break;
      case 2:
        if (isBlank(data.currentAddress)) errors.currentAddress = "Current address is required.";
        if (isBlank(data.currentContact)) errors.currentContact = "Current contact number is required.";
        if (isBlank(data.permanentAddress)) errors.permanentAddress = "Permanent address is required.";
        if (isBlank(data.permanentContact)) errors.permanentContact = "Permanent contact number is required.";
        if (isBlank(data.emergencyContactName)) errors.emergencyContactName = "Emergency contact name is required.";
        if (isBlank(data.emergencyRelationship)) errors.emergencyRelationship = "Emergency relationship is required.";
        if (isBlank(data.emergencyPhone)) errors.emergencyPhone = "Emergency phone is required.";
        if (!isBlank(data.currentContact) && !isValidIndianMobile(data.currentContact)) {
          errors.currentContact = "Current contact must be a valid 10-digit mobile number.";
        }
        if (!isBlank(data.permanentContact) && !isValidIndianMobile(data.permanentContact)) {
          errors.permanentContact = "Permanent contact must be a valid 10-digit mobile number.";
        }
        if (!isBlank(data.emergencyPhone) && !isValidIndianMobile(data.emergencyPhone)) {
          errors.emergencyPhone = "Emergency phone must be a valid 10-digit mobile number.";
        }
        if (!isBlank(data.emergencySecondaryContact) && !isValidIndianMobile(data.emergencySecondaryContact)) {
          errors.emergencySecondaryContact = "Secondary phone must be a valid 10-digit mobile number.";
        }
        break;
      case 5:
        if (isBlank(data.aadhaarNo)) errors.aadhaarNo = "Aadhaar number is required.";
        if (isBlank(data.panNo)) errors.panNo = "PAN number is required.";
        if (!isBlank(data.aadhaarNo) && !isValidAadhaar(data.aadhaarNo)) {
          errors.aadhaarNo = "Aadhaar must be exactly 12 digits.";
        }
        if (!isBlank(data.panNo) && !isValidPan(data.panNo)) {
          errors.panNo = "PAN format must be like ABCDE1234F.";
        }
        if (!isBlank(data.uanNo) && !isValidUan(data.uanNo)) {
          errors.uanNo = "UAN must be exactly 12 digits.";
        }
        break;
      case 6:
        if (isBlank(data.reference1)) errors.reference1 = "Reference 1 details are required.";
        if (isBlank(data.reference2)) errors.reference2 = "Reference 2 details are required.";
        break;
      case 7:
        if (isBlank(data.nomineeName)) errors.nomineeName = "Nominee name is required.";
        if (isBlank(data.nomineeRelationship)) errors.nomineeRelationship = "Nominee relationship is required.";
        if (isBlank(data.nomineeAddress)) errors.nomineeAddress = "Nominee address is required.";
        if (isBlank(data.witness1)) errors.witness1 = "Witness 1 details are required.";
        if (isBlank(data.witness2)) errors.witness2 = "Witness 2 details are required.";
        break;
      case 8:
        if (isBlank(data.declarationName)) errors.declarationName = "Declaration name is required.";
        if (isBlank(data.declarationDate)) errors.declarationDate = "Declaration date is required.";
        if (!data.isCorrect) errors.isCorrect = "Please verify that the information is correct.";
        break;
      default:
        break;
    }

    return errors;
  };

  const handleNext = () => {
    const errors = validateStep(currentStep, formData);
    if (Object.keys(errors).length > 0) {
      setStepErrors(errors);
      setStatusMessage({
        type: "error",
        text: "Please complete the required fields before continuing.",
      });
      return;
    }
    setStepErrors({});
    setStatusMessage({ type: "", text: "" });
    if (currentStep < STEPS.length) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStepErrors({});
    setStatusMessage({ type: "", text: "" });
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const allErrors = validateStep(8, formData);
    if (Object.keys(allErrors).length > 0) {
      setStepErrors(allErrors);
      setStatusMessage({
        type: "error",
        text: "Please complete declaration details before submitting.",
      });
      return;
    }

    setStepErrors({});
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    const payload = {
      ...formData,
      photoUrl:
        typeof formData.photoUrl === "object" && formData.photoUrl?.name
          ? formData.photoUrl.name
          : formData.photoUrl || "",
    };

    try {
      const response = await fetch("/api/employee-data-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to submit employee form right now.",
        );
      }

      setStatusMessage({
        type: "success",
        text:
          result.message ||
          "Employee data form submitted successfully.",
      });
      localStorage.removeItem(EMPLOYEE_FORM_DRAFT_KEY);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setStatusMessage({
        type: "error",
        text:
          error.message ||
          "Something went wrong while submitting the employee data form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1BasicInfo data={formData} setFormData={setFormData} errors={stepErrors} />;
      case 2: return <Step2AddressEmergency data={formData} setFormData={setFormData} errors={stepErrors} />;
      case 3: return <Step3Family data={formData} setFormData={setFormData} errors={stepErrors} />;
      case 4: return <Step4EducationLanguage data={formData} setFormData={setFormData} errors={stepErrors} />;
      case 5: return <Step5IdentityInsurance data={formData} setFormData={setFormData} errors={stepErrors} />;
      case 6: return <Step6EmploymentReferences data={formData} setFormData={setFormData} errors={stepErrors} />;
      case 7: return <Step7Nomination data={formData} setFormData={setFormData} errors={stepErrors} />;
      case 8: return <Step8PreviewDeclaration data={formData} setFormData={setFormData} errors={stepErrors} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex flex-col">
      <Navbar />
      {statusMessage.text && (
        <div className="fixed top-4 left-1/2 z-50 w-[92%] max-w-xl -translate-x-1/2">
          <div
            className={`rounded-lg border px-4 py-3 shadow-lg ${
              statusMessage.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
            role={statusMessage.type === "success" ? "status" : "alert"}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold">{statusMessage.text}</p>
              <button
                type="button"
                onClick={() => setStatusMessage({ type: "", text: "" })}
                className="text-xs font-bold opacity-70 hover:opacity-100"
                aria-label="Close message"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-primary mb-3">Employee Data Form</h1>
            <p className="text-gray-600">Please provide your complete information for HR records.</p>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100">
            {/* Progress indicator */}
            <div className="mb-8 hidden sm:block">
              <div className="flex items-center justify-between">
                {STEPS.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 
                      ${currentStep > index + 1 ? 'bg-primary text-white' : 
                        currentStep === index + 1 ? 'bg-secondary text-text-dark ring-4 ring-secondary/30' : 
                        'bg-gray-200 text-gray-500'}`}>
                      {index + 1}
                    </div>
                    <span className={`text-xs mt-2 text-center ${currentStep === index + 1 ? 'font-bold text-primary' : 'text-gray-500'}`}>
                      {step}
                    </span>
                    {index < STEPS.length - 1 && (
                      <div className={`absolute top-4 left-1/2 w-full h-1 -z-0
                        ${currentStep > index + 1 ? 'bg-primary' : 'bg-gray-200'}`} 
                        style={{ width: 'calc(100% - 2rem)', left: 'calc(50% + 1rem)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Progress */}
            <div className="sm:hidden mb-6 text-center">
              <span className="text-sm font-semibold text-primary">Step {currentStep} of {STEPS.length}</span>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${(currentStep / STEPS.length) * 100}%` }}></div>
              </div>
            </div>

            <div className="min-h-[400px]">
              {renderStep()}
            </div>

            <div className="mt-10 flex justify-between border-t pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrev} 
                className={currentStep === 1 ? "invisible" : ""}
              >
                Previous
              </Button>
              
              {currentStep < STEPS.length ? (
                <button 
                  type="button"
                  className="btn-primary" 
                  onClick={handleNext}
                  disabled={isSubmitting}
                >
                  Save & Next
                </button>
              ) : (
                <button 
                  type="button"
                  className="btn-primary flex items-center gap-2" 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </button>
              )}
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
