"use client";

import { useEffect } from "react";

export default function FormToast({
  message,
  type = "success",
  duration = 2200,
  onClose,
}) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const tone =
    type === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-red-200 bg-red-50 text-red-700";

  return (
    <div className="fixed top-4 right-4 z-[90] w-[92%] max-w-sm">
      <div
        className={`rounded-xl border px-4 py-3 shadow-lg backdrop-blur ${tone}`}
        role={type === "success" ? "status" : "alert"}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold">{message}</p>
          <button
            type="button"
            onClick={() => onClose?.()}
            className="text-xs font-bold opacity-70 hover:opacity-100"
            aria-label="Close toast"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
