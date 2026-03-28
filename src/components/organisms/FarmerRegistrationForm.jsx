"use client";

import { useState } from "react";

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
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [selectedFodders, setSelectedFodders] = useState([]);
  const [gpsLocation, setGpsLocation] = useState("");
  const [gpsStatus, setGpsStatus] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      const response = await fetch("/api/farmer-registration", {
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
          "Farmer registration submitted successfully. The data has been sent to Google Sheets.",
      );
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
