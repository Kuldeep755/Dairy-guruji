"use client";

import { Button } from "@/components/ui/button";
import { FormField, Input, Select, Textarea } from "@/components/ui/input";

import {
  aiTypeOptions,
  appetiteOptions,
  classificationOptions,
  pregnancyStatusOptions,
  sourceOptions,
  speciesOptions,
  yesNoOptions,
} from "./constants";
import { ChoiceGrid, SectionBlock } from "./shared";

export default function FarmerRegistrationStepFour({
  goBack,
  handleSubmit,
  selectedClassification,
  setSelectedClassification,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="hidden"
        name="animal_classification"
        value={selectedClassification}
      />

      <SectionBlock title="Form 4: Animal-Wise Profile">
        <div className="rounded-2xl border border-[#eadfcf] bg-[#fbf5ea] p-4 text-sm leading-6 text-[#5d4630]">
          This is the most important form. It captures animal-level data for
          health, breeding, production, economics, and the final decision tag for
          each animal.
        </div>
      </SectionBlock>

      <SectionBlock title="1. Identification">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Tag number">
            <Input
              name="animal_tag_number"
              placeholder="Tag number"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Animal name">
            <Input
              name="animal_name"
              placeholder="Animal name"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Photo">
            <Input
              name="animal_photo"
              type="file"
              accept="image/*"
              className="h-12 rounded-xl border-[#d9d9d9] px-3 text-base file:mr-3 file:rounded-lg file:border-0 file:bg-[#202020] file:px-3 file:py-2 file:text-sm file:font-medium file:text-white"
            />
          </FormField>
          <FormField label="Species">
            <Select
              name="species"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select species
              </option>
              {speciesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Breed">
            <Input
              name="animal_breed"
              placeholder="Breed"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Age">
            <Input
              name="animal_age"
              placeholder="Age"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="DOB (if known)">
            <Input
              name="animal_dob"
              type="date"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Purchased / homebred">
            <Select
              name="animal_source"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select source
              </option>
              {sourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="2. Production">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Current milk (morning)">
            <Input
              name="current_milk_morning"
              placeholder="Litres"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Current milk (evening)">
            <Input
              name="current_milk_evening"
              placeholder="Litres"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Peak milk">
            <Input
              name="peak_milk"
              placeholder="Peak milk"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Lactation number">
            <Input
              name="lactation_number"
              type="number"
              placeholder="Lactation number"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Days in milk">
            <Input
              name="days_in_milk"
              type="number"
              placeholder="Days in milk"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Last lactation milk">
            <Input
              name="last_lactation_milk"
              placeholder="Last lactation milk"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="3. Reproduction">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Last heat date">
            <Input
              name="last_heat_date"
              type="date"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Last AI date">
            <Input
              name="last_ai_date"
              type="date"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="AI type">
            <Select
              name="ai_type"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select AI type
              </option>
              {aiTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Pregnancy status">
            <Select
              name="pregnancy_status"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select status
              </option>
              {pregnancyStatusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="PD date">
            <Input
              name="pd_date"
              type="date"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Expected calving date">
            <Input
              name="expected_calving_date"
              type="date"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Repeat breeder">
            <Select
              name="repeat_breeder_status"
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
          <FormField label="Services per conception">
            <Input
              name="services_per_conception"
              type="number"
              placeholder="Services per conception"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="4. Health">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Mastitis history">
            <Select
              name="mastitis_history"
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
          <FormField label="Lameness">
            <Select
              name="lameness"
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
          <FormField label="Fever">
            <Select
              name="fever"
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
          <FormField label="Vaccination status">
            <Select
              name="vaccination_status"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select vaccination status
              </option>
              <option value="Up to date">Up to date</option>
              <option value="Due">Due</option>
              <option value="Not done">Not done</option>
            </Select>
          </FormField>
          <FormField label="Deworming status">
            <Select
              name="deworming_status"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select deworming status
              </option>
              <option value="Up to date">Up to date</option>
              <option value="Due">Due</option>
              <option value="Not done">Not done</option>
            </Select>
          </FormField>
          <FormField label="Body condition score (1-5)">
            <Input
              name="body_condition_score"
              type="number"
              min="1"
              max="5"
              step="0.5"
              placeholder="BCS"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Appetite">
              <Select
                name="appetite"
                defaultValue=""
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              >
                <option value="" disabled>
                  Select appetite
                </option>
                {appetiteOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="5. Feeding">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Green fodder qty">
            <Input
              name="green_fodder_qty"
              placeholder="Kg/day"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Dry fodder qty">
            <Input
              name="dry_fodder_qty"
              placeholder="Kg/day"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Concentrate qty">
            <Input
              name="concentrate_qty"
              placeholder="Kg/day"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Mineral mixture">
            <Select
              name="mineral_mixture"
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
          <FormField label="Calcium">
            <Select
              name="calcium"
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
          <FormField label="Bypass fat">
            <Select
              name="bypass_fat"
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
      </SectionBlock>

      <SectionBlock title="6. Economics">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Feed cost/day">
            <Input
              name="feed_cost_per_day"
              placeholder="Feed cost per day"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Milk income/day">
            <Input
              name="milk_income_per_day"
              placeholder="Milk income per day"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Profit/loss estimate">
              <Textarea
                name="profit_loss_estimate"
                placeholder="Estimated daily or monthly profit/loss"
                className="min-h-24 rounded-xl border-[#d9d9d9] px-4 py-3 text-base"
              />
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="7. Classification">
        <div className="space-y-4">
          <div className="rounded-xl bg-[#f7f7f7] px-4 py-3 text-sm text-[#444444]">
            Mark the animal for clear field-level action and decision-making.
          </div>
          <ChoiceGrid
            options={classificationOptions}
            value={selectedClassification}
            onChange={setSelectedClassification}
            columns="sm:grid-cols-2 xl:grid-cols-5"
          />
        </div>
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
            className="h-12 flex-1 rounded-xl bg-[#202020] text-base font-medium text-white hover:bg-[#202020]/95"
          >
            Save And Next
          </Button>
        </div>
      </div>
    </form>
  );
}
