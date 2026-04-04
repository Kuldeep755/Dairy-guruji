import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props} />
  );
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-primary/15 bg-white px-3 py-2 text-sm text-text-dark placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-transparent transition-all duration-200 ${
        className || ""
      }`}
      {...props}
    />
  );
}

export function Select({ className, children, ...props }) {
  return (
    <select
      className={`flex h-10 w-full rounded-md border border-primary/15 bg-white px-3 py-2 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-transparent transition-all duration-200 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </select>
  );
}

export function FormField({ label, error, children }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-semibold text-text-dark/70">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <span className="w-2 h-2 bg-red-600 rounded-full" />
          {error}
        </p>
      )}
    </div>
  );
}

export { Input }
