"use client";

import { Button } from "@/components/ui/button";
import { FormField, Input, Select, Textarea } from "@/components/ui/input";

import {
  bodyConditionOptions,
  milkReasonOptions,
  milkTrendOptions,
  recommendationOptions,
  recoveryStatusOptions,
  yesNoOptions,
} from "./constants";
import { SectionBlock } from "./shared";

export default function FarmerRegistrationStepFive({
  goBack,
  handleSubmit,
  isSubmitting,
  submitMessage,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <SectionBlock title="Form 5: Monthly Visit Form">
        <div className="rounded-2xl border border-[#eadfcf] bg-[#fbf5ea] p-4 text-sm leading-6 text-[#5d4630]">
          This is where real transformation happens. Only capture changes and
          actions from the visit instead of repeating the full profile.
        </div>
      </SectionBlock>

      <SectionBlock title="1. Visit Info">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Date">
            <Input
              name="visit_date"
              type="date"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Staff name">
            <Input
              name="staff_name"
              placeholder="Staff name"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Farmer name">
            <Input
              name="visit_farmer_name"
              placeholder="Farmer name"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Visit number">
            <Input
              name="visit_number"
              type="number"
              placeholder="Visit number"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="2. Milk Changes">
        <div className="space-y-4">
          <FormField label="Milk trend">
            <Select
              name="milk_trend"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select milk trend
              </option>
              {milkTrendOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#555555]">Reason</label>
            <div className="grid gap-3 sm:grid-cols-3">
              {milkReasonOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 rounded-xl border border-[#d9d9d9] px-4 py-3 text-sm text-[#4a4a4a]"
                >
                  <input
                    type="checkbox"
                    name="milk_change_reason"
                    value={option}
                    className="h-4 w-4 accent-[#202020]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <FormField label="Milk change notes">
            <Textarea
              name="milk_change_notes"
              placeholder="Add details about increase, decrease, or stable milk output"
              className="min-h-24 rounded-xl border-[#d9d9d9] px-4 py-3 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="3. Breeding Updates">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="New heat cases">
            <Input
              name="new_heat_cases"
              type="number"
              placeholder="New heat cases"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="AI done">
            <Select
              name="visit_ai_done"
              defaultValue="No"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="PD done">
            <Select
              name="visit_pd_done"
              defaultValue="No"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Pregnant animals">
            <Input
              name="visit_pregnant_animals"
              type="number"
              placeholder="Pregnant animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Repeat breeders">
              <Input
                name="visit_repeat_breeders"
                type="number"
                placeholder="Repeat breeders"
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              />
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="4. Health Updates">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="New disease cases">
            <Input
              name="new_disease_cases"
              type="number"
              placeholder="New disease cases"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Mastitis">
            <Select
              name="visit_mastitis"
              defaultValue="No"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Treatment given">
            <Textarea
              name="visit_treatment_given"
              placeholder="Treatment given"
              className="min-h-24 rounded-xl border-[#d9d9d9] px-4 py-3 text-base"
            />
          </FormField>
          <FormField label="Recovery status">
            <Select
              name="recovery_status"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select recovery status
              </option>
              {recoveryStatusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="5. Feeding Updates">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Feed changed">
            <Select
              name="feed_changed"
              defaultValue="No"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Quantity changed">
            <Input
              name="quantity_changed"
              placeholder="Describe quantity change"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="New supplement started">
            <Input
              name="new_supplement_started"
              placeholder="Supplement name"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Green fodder status">
            <Input
              name="green_fodder_status"
              placeholder="Current green fodder status"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="6. Body Condition">
        <FormField label="Body condition">
          <Select
            name="body_condition_visit"
            defaultValue=""
            className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
          >
            <option value="" disabled>
              Select body condition
            </option>
            {bodyConditionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormField>
      </SectionBlock>

      <SectionBlock title="7. Key Observations">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Weak animals">
            <Input
              name="weak_animals_observed"
              placeholder="Weak animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Non-eating animals">
            <Input
              name="non_eating_animals"
              placeholder="Non-eating animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Behaviour issues">
              <Textarea
                name="behaviour_issues"
                placeholder="Behaviour issues or unusual patterns"
                className="min-h-24 rounded-xl border-[#d9d9d9] px-4 py-3 text-base"
              />
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="8. Actions Taken">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Treatment given">
            <Textarea
              name="actions_treatment_given"
              placeholder="Treatment given during the visit"
              className="min-h-24 rounded-xl border-[#d9d9d9] px-4 py-3 text-base"
            />
          </FormField>
          <FormField label="AI done">
            <Select
              name="actions_ai_done"
              defaultValue="No"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Feed recommendation">
            <Textarea
              name="feed_recommendation"
              placeholder="Feed recommendation"
              className="min-h-24 rounded-xl border-[#d9d9d9] px-4 py-3 text-base"
            />
          </FormField>
          <FormField label="Mineral mixture advised">
            <Select
              name="mineral_mixture_advised"
              defaultValue="No"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Deworming done">
              <Select
                name="visit_deworming_done"
                defaultValue="No"
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              >
                {yesNoOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="9. Recommendations">
        <div className="space-y-3">
          <label className="text-sm font-medium text-[#555555]">
            Recommendations
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recommendationOptions.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 rounded-xl border border-[#d9d9d9] px-4 py-3 text-sm text-[#4a4a4a]"
              >
                <input
                  type="checkbox"
                  name="recommendations"
                  value={option}
                  className="h-4 w-4 accent-[#202020]"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="10. Follow-up Tasks">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Next visit date">
            <Input
              name="next_visit_date"
              type="date"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Urgent alerts">
            <Input
              name="urgent_alerts"
              placeholder="Urgent alerts"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Pending actions">
              <Textarea
                name="pending_actions"
                placeholder="Pending actions for next follow-up"
                className="min-h-24 rounded-xl border-[#d9d9d9] px-4 py-3 text-base"
              />
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <div className="rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6">
        {submitMessage ? (
          <p className="mb-4 text-sm text-[#6b6b6b]">{submitMessage}</p>
        ) : null}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            onClick={goBack}
            className="h-12 flex-1 rounded-xl border border-[#d9d9d9] bg-white text-base font-medium text-[#202020] hover:bg-[#f7f7f7]"
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 flex-1 rounded-xl bg-[#202020] text-base font-medium text-white hover:bg-[#202020]/95"
          >
            {isSubmitting ? "Submitting..." : "Save Monthly Visit"}
          </Button>
        </div>
      </div>
    </form>
  );
}
