"use client";

import { Button } from "@/components/ui/button";
import { FormField, Input, Select } from "@/components/ui/input";

import {
  drainageOptions,
  electricityOptions,
  floorOptions,
  fodderOptions,
  housingOptions,
  hygieneOptions,
  milkingFrequencyOptions,
  milkingMethodOptions,
  milkSellingOptions,
  recordTypeOptions,
  skillOptions,
  ventilationOptions,
  waterAvailabilityOptions,
  waterSourceOptions,
  yesNoOptions,
} from "./constants";
import { ChoiceGrid, SectionBlock } from "./shared";

export default function FarmerRegistrationStepTwo({
  goBack,
  handleSubmit,
  selectedFodders,
  toggleFodder,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="fodder_grown" value={selectedFodders.join(", ")} />

      <SectionBlock title="1. Land & Fodder">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Total land (acre)">
            <Input
              name="total_land_acre"
              type="number"
              placeholder="Land in acres"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Land type">
            <Select
              name="land_type"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select land type
              </option>
              <option value="Irrigated">Irrigated</option>
              <option value="Non-irrigated">Non-irrigated</option>
            </Select>
          </FormField>
          <div className="space-y-3 md:col-span-2">
            <label className="text-sm font-medium text-[#555555]">Fodder grown</label>
            <ChoiceGrid
              options={fodderOptions}
              value={selectedFodders}
              onChange={toggleFodder}
              multiple
            />
          </div>
          <div className="md:col-span-2">
            <FormField label="Green fodder availability">
              <Select
                name="green_fodder_availability"
                defaultValue=""
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              >
                <option value="" disabled>
                  Select availability
                </option>
                <option value="All year">All year</option>
                <option value="Seasonal">Seasonal</option>
                <option value="Purchased">Purchased</option>
              </Select>
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="2. Shed & Housing">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Type">
            <Select
              name="shed_type"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select shed type
              </option>
              {housingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Floor type">
            <Select
              name="floor_type"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select floor type
              </option>
              {floorOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Drainage">
            <Select
              name="drainage"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select drainage
              </option>
              {drainageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Ventilation">
            <Select
              name="ventilation"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select ventilation
              </option>
              {ventilationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Shade availability">
              <Select
                name="shade_availability"
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
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="3. Water & Electricity">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Water source">
            <Select
              name="water_source"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select water source
              </option>
              {waterSourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Water availability">
            <Select
              name="water_availability"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select water availability
              </option>
              {waterAvailabilityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Electricity">
              <Select
                name="electricity"
                defaultValue=""
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              >
                <option value="" disabled>
                  Select electricity condition
                </option>
                {electricityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="4. Labour">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Number of workers">
            <Input
              name="number_of_workers"
              type="number"
              placeholder="Workers"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Worker type">
            <Select
              name="worker_type"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select worker type
              </option>
              {skillOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Working hours">
            <Input
              name="working_hours"
              placeholder="Example: 8 hours"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Labour cost per month">
            <Input
              name="labour_cost_per_month"
              placeholder="Monthly labour cost"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="5. Milking System">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Method">
            <Select
              name="milking_method"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select method
              </option>
              {milkingMethodOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Number of times">
            <Select
              name="milking_frequency"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select frequency
              </option>
              {milkingFrequencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Hygiene level">
              <Select
                name="hygiene_level"
                defaultValue=""
                className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
              >
                <option value="" disabled>
                  Select hygiene level
                </option>
                {hygieneOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="6. Milk Selling">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Milk sold to">
            <Select
              name="milk_sold_to"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select selling channel
              </option>
              {milkSellingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Daily milk sold">
            <Input
              name="daily_milk_sold"
              placeholder="Litres per day"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Cow price per litre">
            <Input
              name="cow_price_per_litre"
              placeholder="Cow milk price"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
          <FormField label="Buffalo price per litre">
            <Input
              name="buffalo_price_per_litre"
              placeholder="Buffalo milk price"
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            />
          </FormField>
        </div>
      </SectionBlock>

      <SectionBlock title="7. Record Keeping">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Maintains records">
            <Select
              name="maintains_records"
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
          <FormField label="If yes, how?">
            <Select
              name="record_type"
              defaultValue=""
              className="h-12 rounded-xl border-[#d9d9d9] px-4 text-base"
            >
              <option value="" disabled>
                Select record type
              </option>
              {recordTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
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
