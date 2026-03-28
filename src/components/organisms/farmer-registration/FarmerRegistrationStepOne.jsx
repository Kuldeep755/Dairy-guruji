"use client";

import { Button } from "@/components/ui/button";
import { FormField, Input, Select, Textarea } from "@/components/ui/input";

import {
  challengeOptions,
  decisionOptions,
  educationOptions,
  goalOptions,
  incomeOptions,
  labourOptions,
  occupationOptions,
  preferenceOptions,
  purposeOptions,
  yesNoOptions,
} from "./constants";
import { ChoiceGrid, SectionBlock } from "./shared";

export default function FarmerRegistrationStepOne({
  captureLocation,
  gpsLocation,
  gpsStatus,
  handleSubmit,
  selectedChallenge,
  selectedGoals,
  setSelectedChallenge,
  toggleGoal,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="gps_location" value={gpsLocation} />
      <input type="hidden" name="farmer_goals" value={selectedGoals.join(", ")} />
      <input type="hidden" name="challenge_category" value={selectedChallenge} />

      <SectionBlock title="1. Basic Identity">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Farmer Name">
            <Input
              name="farmer_name"
              placeholder="Enter farmer name"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Father's Name">
            <Input
              name="father_name"
              placeholder="Enter father's name"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Mobile Number (Primary)">
            <Input
              name="primary_mobile"
              type="tel"
              placeholder="Phone number"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Alternate Number">
            <Input
              name="alternate_mobile"
              type="tel"
              placeholder="Alternate number"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="WhatsApp Available">
            <Select
              name="whatsapp_available"
              defaultValue="Yes"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Village">
            <Input
              name="village"
              placeholder="Village"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Tehsil">
            <Input
              name="tehsil"
              placeholder="Tehsil"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="District">
            <Input
              name="district"
              placeholder="District"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="State">
            <Input
              name="state"
              placeholder="State"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-[#555555]">GPS Location</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                value={gpsLocation}
                readOnly
                placeholder="Auto capture in app"
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              />
              <button
                type="button"
                onClick={captureLocation}
                className="h-12 rounded-xl border border-[#d9d9d9] px-5 text-sm font-medium text-[#202020] transition hover:border-[#202020]"
              >
                Capture
              </button>
            </div>
            {gpsStatus ? <p className="text-sm text-[#6b6b6b]">{gpsStatus}</p> : null}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="2. Personal Profile">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Age">
            <Input
              name="age"
              type="number"
              placeholder="Age"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Education">
            <Select
              name="education"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select education
              </option>
              {educationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Experience in dairy (years)">
            <Input
              name="dairy_experience_years"
              type="number"
              placeholder="Years"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Occupation">
            <Select
              name="occupation"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select occupation
              </option>
              {occupationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Monthly household income range">
              <Select
                name="monthly_income_range"
                defaultValue=""
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              >
                <option value="" disabled>
                  Select income range
                </option>
                {incomeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="3. Family Involvement">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Total family members">
            <Input
              name="total_family_members"
              type="number"
              placeholder="Total members"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Members working in dairy">
            <Input
              name="members_working_in_dairy"
              type="number"
              placeholder="Members in dairy"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Who takes decisions">
            <Select
              name="decision_maker"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select decision maker
              </option>
              {decisionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Labour type">
            <Select
              name="labour_type"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select labour type
              </option>
              {labourOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="4. Dairy Purpose">
        <div className="space-y-4">
          <p className="rounded-xl bg-[#f7f7f7] px-4 py-3 text-sm text-[#444444]">
            आप डेयरी क्यों कर रहे हो?
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {purposeOptions.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 rounded-xl border border-[#d9d9d9] px-4 py-3 text-sm text-[#4a4a4a]"
              >
                <input
                  type="radio"
                  name="dairy_purpose"
                  value={option}
                  className="h-4 w-4 accent-[#202020]"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="5. Farmer Goals">
        <div className="space-y-4">
          <p className="text-sm text-[#6b6b6b]">Select up to 3 goals</p>
          <ChoiceGrid
            options={goalOptions}
            value={selectedGoals}
            onChange={toggleGoal}
            multiple
            limit={3}
          />
        </div>
      </SectionBlock>

      <SectionBlock title="6. Current Challenges">
        <div className="space-y-4">
          <FormField label="Open Response">
            <Textarea
              name="open_challenge_response"
              placeholder="सबसे बड़ी समस्या क्या है?"
              className="min-h-32 rounded-xl border-[#d9d9d9] px-4 py-3 text-base"
            />
          </FormField>
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#555555]">
              Challenge Category
            </label>
            <ChoiceGrid
              options={challengeOptions}
              value={selectedChallenge}
              onChange={setSelectedChallenge}
            />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="7. Technology Readiness">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Smartphone available">
            <Select
              name="smartphone_available"
              defaultValue="Yes"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Uses WhatsApp">
            <Select
              name="uses_whatsapp"
              defaultValue="Yes"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Can read Hindi">
            <Select
              name="can_read_hindi"
              defaultValue="Yes"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Can use mobile app">
            <Select
              name="can_use_mobile_app"
              defaultValue="Yes"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <div className="space-y-3 md:col-span-2">
            <label className="text-sm font-medium text-[#555555]">Preferred UI Type</label>
            <div className="grid gap-3 sm:grid-cols-3">
              {preferenceOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 rounded-xl border border-[#d9d9d9] px-4 py-3 text-sm text-[#4a4a4a]"
                >
                  <input
                    type="radio"
                    name="ui_preference"
                    value={option}
                    className="h-4 w-4 accent-[#202020]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <div className="rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6">
        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-[#202020] text-base font-medium text-white hover:bg-[#202020]/95"
        >
          Save And Next
        </Button>
      </div>
    </form>
  );
}
