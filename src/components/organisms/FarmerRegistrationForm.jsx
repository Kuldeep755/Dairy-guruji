"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { backendFetch } from "@/lib/api";

import FarmerRegistrationStepOne from "@/components/organisms/farmer-registration/FarmerRegistrationStepOne";
import FarmerRegistrationStepTwo from "@/components/organisms/farmer-registration/FarmerRegistrationStepTwo";
import FarmerRegistrationStepThree from "@/components/organisms/farmer-registration/FarmerRegistrationStepThree";
import { stepLabels } from "@/components/organisms/farmer-registration/constants";
import { StepProgress } from "@/components/organisms/farmer-registration/shared";

function formDataToObject(formElement) {
  const formData = new FormData(formElement);
  const values = {};

  for (const [key, rawValue] of formData.entries()) {
    const value = rawValue instanceof File ? rawValue.name : rawValue;

    if (!value) {
      continue;
    }

    if (Object.prototype.hasOwnProperty.call(values, key)) {
      values[key] = `${values[key]}, ${value}`;
      continue;
    }

    values[key] = value;
  }

  return values;
}

export default function FarmerRegistrationForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [selectedFodders, setSelectedFodders] = useState([]);
  const [gpsLocation, setGpsLocation] = useState("");
  const [gpsStatus, setGpsStatus] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registrationData, setRegistrationData] = useState({});

  const toggleGoal = (goal) => {
    setSelectedGoals((current) => {
      if (current.includes(goal)) {
        return current.filter((item) => item !== goal);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, goal];
    });
  };

  const toggleFodder = (fodder) => {
    setSelectedFodders((current) =>
      current.includes(fodder)
        ? current.filter((item) => item !== fodder)
        : [...current, fodder],
    );
  };

  const captureLocation = () => {
    if (!navigator.geolocation) {
      setGpsStatus("GPS is not supported on this device.");
      return;
    }

    setGpsStatus("Fetching location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGpsLocation(
          `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`,
        );
        setGpsStatus("Location captured.");
      },
      () => {
        setGpsStatus("Location permission denied or unavailable.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  const handleStepSubmit = (nextStep) => (event) => {
    event.preventDefault();
    setSubmitMessage("");

    const stepValues = formDataToObject(event.currentTarget);

    setRegistrationData((current) => ({
      ...current,
      ...stepValues,
    }));

    setCurrentStep(nextStep);
  };

  const handleFinalSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage("");
    setIsSubmitting(true);

    const finalStepValues = formDataToObject(event.currentTarget);
    const payload = {
      ...registrationData,
      ...finalStepValues,
    };

    setRegistrationData(payload);

    try {
      const response = await backendFetch("/api/forms/farmer-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to submit farmer registration right now.",
        );
      }

      setSubmitMessage(
        result.message ||
          "Farmer registration submitted successfully. Your details have been saved.",
      );
      setIsSuccess(true);

      // Redirect to home page after 3 seconds
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      setSubmitMessage(
        error.message ||
          "Something went wrong while submitting the farmer registration form.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-5">
      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[#202020]">
              Registration Successful!
            </h2>
            <p className="mb-4 text-[#4a4a4a]">
              {submitMessage || "Your farmer registration has been submitted successfully."}
            </p>
            <p className="text-sm text-[#888888]">
              Redirecting to home page in 3 seconds...
            </p>
          </div>
        </div>
      )}

      <StepProgress currentStep={currentStep} stepLabels={stepLabels} />

      {currentStep === 1 ? (
        <FarmerRegistrationStepOne
          captureLocation={captureLocation}
          gpsLocation={gpsLocation}
          gpsStatus={gpsStatus}
          handleSubmit={handleStepSubmit(2)}
          selectedChallenge={selectedChallenge}
          selectedGoals={selectedGoals}
          setSelectedChallenge={setSelectedChallenge}
          toggleGoal={toggleGoal}
        />
      ) : null}

      {currentStep === 2 ? (
        <FarmerRegistrationStepTwo
          goBack={() => setCurrentStep(1)}
          handleSubmit={handleStepSubmit(3)}
          selectedFodders={selectedFodders}
          toggleFodder={toggleFodder}
        />
      ) : null}

      {currentStep === 3 ? (
        <FarmerRegistrationStepThree
          goBack={() => setCurrentStep(2)}
          handleSubmit={handleFinalSubmit}
          isSubmitting={isSubmitting}
          submitMessage={submitMessage}
        />
      ) : null}
    </div>
  );
}
