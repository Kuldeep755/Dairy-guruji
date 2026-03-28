"use client";

import { Button } from "@/components/ui/button";
import { FormField, Input, Textarea } from "@/components/ui/input";

import { SectionBlock } from "./shared";

export default function FarmerRegistrationStepThree({
  goBack,
  handleSubmit,
  isSubmitting,
  submitMessage,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <SectionBlock title="1. Total Animals">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Total animals">
            <Input
              name="total_animals"
              type="number"
              placeholder="Total animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Cow count">
            <Input
              name="cow_count"
              type="number"
              placeholder="Number of cows"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Buffalo count">
              <Input
                name="buffalo_count"
                type="number"
                placeholder="Number of buffaloes"
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              />
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="2. Category-wise">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Milking animals">
            <Input
              name="milking_animals"
              type="number"
              placeholder="Milking animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Dry animals">
            <Input
              name="dry_animals"
              type="number"
              placeholder="Dry animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Pregnant animals">
            <Input
              name="pregnant_animals_summary"
              type="number"
              placeholder="Pregnant animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Heifers">
            <Input
              name="heifers"
              type="number"
              placeholder="Heifers"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Male calves">
            <Input
              name="male_calves"
              type="number"
              placeholder="Male calves"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Female calves">
            <Input
              name="female_calves"
              type="number"
              placeholder="Female calves"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Bulls">
              <Input
                name="bulls"
                type="number"
                placeholder="Bulls"
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              />
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="3. Breed-wise">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="HF">
            <Input
              name="breed_hf"
              type="number"
              placeholder="HF count"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Jersey">
            <Input
              name="breed_jersey"
              type="number"
              placeholder="Jersey count"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Sahiwal">
            <Input
              name="breed_sahiwal"
              type="number"
              placeholder="Sahiwal count"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Gir">
            <Input
              name="breed_gir"
              type="number"
              placeholder="Gir count"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Murrah">
            <Input
              name="breed_murrah"
              type="number"
              placeholder="Murrah count"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Local">
            <Input
              name="breed_local"
              type="number"
              placeholder="Local breed count"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Crossbred">
              <Input
                name="breed_crossbred"
                type="number"
                placeholder="Crossbred count"
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              />
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="4. Production Summary">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Total milk per day">
            <Input
              name="total_milk_per_day"
              placeholder="Litres per day"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Average milk per animal">
            <Input
              name="average_milk_per_animal"
              placeholder="Average litres"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Highest producer">
            <Input
              name="highest_producer"
              placeholder="Highest producer"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Lowest producer">
            <Input
              name="lowest_producer"
              placeholder="Lowest producer"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="5. Reproduction Snapshot">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Animals not in heat">
            <Input
              name="animals_not_in_heat"
              type="number"
              placeholder="Animals not in heat"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Repeat breeders">
            <Input
              name="repeat_breeders"
              type="number"
              placeholder="Repeat breeders"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Pregnant animals">
            <Input
              name="pregnant_animals_reproduction"
              type="number"
              placeholder="Pregnant animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Animals due for calving">
            <Input
              name="animals_due_for_calving"
              type="number"
              placeholder="Due for calving"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="6. Health Snapshot">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Mastitis cases">
            <Input
              name="mastitis_cases"
              type="number"
              placeholder="Mastitis cases"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Sick animals">
            <Input
              name="sick_animals"
              type="number"
              placeholder="Sick animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Recent deaths">
            <Input
              name="recent_deaths"
              type="number"
              placeholder="Recent deaths"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Weak animals">
            <Input
              name="weak_animals"
              type="number"
              placeholder="Weak animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="7. Risk Indicators">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Low milk animals">
            <Input
              name="low_milk_animals"
              type="number"
              placeholder="Low milk animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Non-productive animals">
            <Input
              name="non_productive_animals"
              type="number"
              placeholder="Non-productive animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Old animals (>5–6 lactations)">
            <Input
              name="old_animals"
              type="number"
              placeholder="Old animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Chronic disease animals">
            <Input
              name="chronic_disease_animals"
              type="number"
              placeholder="Chronic disease animals"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="Why This Form Matters">
        <Textarea
          readOnly
          value="This snapshot helps your staff quickly identify where the problem is and where the opportunity is."
          className="min-h-24 rounded-xl border-[#d9d9d9] bg-[#f7f7f7] px-4 py-3 text-base text-[#555555]"
        />
      </SectionBlock>

      <div className="rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6">
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
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </Button>
        </div>
        {submitMessage ? (
          <p className="mt-4 text-sm text-[#4a4a4a]">{submitMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
