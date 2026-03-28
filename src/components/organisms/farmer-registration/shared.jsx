"use client";

import { cn } from "@/lib/utils";

export function SectionBlock({ title, children }) {
  return (
    <section className="space-y-5 rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-[#202020] sm:text-xl">{title}</h2>
      {children}
    </section>
  );
}

function SimpleChoice({
  active,
  disabled = false,
  onClick,
  children,
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "rounded-xl border px-4 py-3 text-left text-sm transition",
        active
          ? "border-[#202020] bg-[#202020] text-white"
          : "border-[#d9d9d9] bg-white text-[#4a4a4a]",
        disabled ? "cursor-not-allowed opacity-50" : "hover:border-[#202020]",
      )}
    >
      {children}
    </button>
  );
}

export function ChoiceGrid({
  options,
  value,
  onChange,
  multiple = false,
  limit,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}) {
  return (
    <div className={cn("grid gap-3", columns)}>
      {options.map((option) => {
        const active = multiple ? value.includes(option) : value === option;
        const disabled =
          multiple && !active && typeof limit === "number" && value.length >= limit;

        return (
          <SimpleChoice
            key={option}
            active={active}
            disabled={disabled}
            onClick={() => onChange(option)}
          >
            {option}
          </SimpleChoice>
        );
      })}
    </div>
  );
}

export function StepProgress({ currentStep, stepLabels }) {
  return (
    <div className="rounded-2xl border border-[#e8e8e8] bg-white p-4 sm:p-5">
      <div
        className="grid items-center gap-3"
        style={{ gridTemplateColumns: `repeat(${stepLabels.length}, minmax(0, 1fr))` }}
      >
        {stepLabels.map((label, index) => {
          const step = index + 1;

          return (
            <div key={label} className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                  currentStep === step
                    ? "bg-[#202020] text-white"
                    : currentStep > step
                      ? "bg-[#dfe7d8] text-[#202020]"
                      : "border border-[#d9d9d9] bg-white text-[#4a4a4a]",
                )}
              >
                {step}
              </div>
              {step < stepLabels.length ? (
                <div className="hidden h-px flex-1 bg-[#e8e8e8] sm:block" />
              ) : null}
            </div>
          );
        })}
      </div>
      <div
        className="mt-3 grid gap-3 text-center text-xs text-[#6b6b6b] sm:text-sm"
        style={{ gridTemplateColumns: `repeat(${stepLabels.length}, minmax(0, 1fr))` }}
      >
        {stepLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
