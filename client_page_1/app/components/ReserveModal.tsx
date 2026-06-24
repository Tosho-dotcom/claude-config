"use client";

import { useState, useEffect, useRef } from "react";
import { X, CheckCircle } from "lucide-react";

type FormState = {
  name: string;
  partySize: string;
  date: string;
  time: string;
};

function Modal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    partySize: "2",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md text-chalk text-base transition-colors duration-150 border outline-none focus:ring-2";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Reserve a table"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-espresso/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-md rounded-xl border p-8 shadow-lg"
        style={{
          background: "var(--color-moss)",
          borderColor: "var(--color-fern)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-latte hover:text-chalk transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle className="w-12 h-12" style={{ color: "var(--color-gold)" }} />
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-chalk)" }}
            >
              You&rsquo;re on the list
            </h2>
            <p className="text-sm" style={{ color: "var(--color-parchment)", fontFamily: "var(--font-body)" }}>
              We&rsquo;ll hold a table for {form.name} — party of {form.partySize} — on{" "}
              {form.date} at {form.time}. See you soon.
            </p>
            <button className="btn-primary mt-2" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2
              className="text-3xl font-semibold mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-chalk)" }}
            >
              Reserve a table
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--color-parchment)", fontFamily: "var(--font-body)" }}>
              We&rsquo;ll hold it for 15 minutes past your time.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                  style={{ color: "var(--color-parchment)", fontFamily: "var(--font-body)" }}
                >
                  Your name
                </label>
                <input
                  ref={firstInputRef}
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ada Lovelace"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  style={{
                    background: "var(--color-espresso)",
                    borderColor: "var(--color-fern)",
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="partySize"
                  className="text-sm font-medium"
                  style={{ color: "var(--color-parchment)", fontFamily: "var(--font-body)" }}
                >
                  Party size
                </label>
                <select
                  id="partySize"
                  name="partySize"
                  required
                  value={form.partySize}
                  onChange={handleChange}
                  className={inputClass}
                  style={{
                    background: "var(--color-espresso)",
                    borderColor: "var(--color-fern)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "person" : "people"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium"
                    style={{ color: "var(--color-parchment)", fontFamily: "var(--font-body)" }}
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                    style={{
                      background: "var(--color-espresso)",
                      borderColor: "var(--color-fern)",
                      fontFamily: "var(--font-body)",
                      colorScheme: "dark",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="time"
                    className="text-sm font-medium"
                    style={{ color: "var(--color-parchment)", fontFamily: "var(--font-body)" }}
                  >
                    Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className={inputClass}
                    style={{
                      background: "var(--color-espresso)",
                      borderColor: "var(--color-fern)",
                      fontFamily: "var(--font-body)",
                      colorScheme: "dark",
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-2 justify-center">
                Confirm reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function ReserveButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children ?? "Reserve a table"}
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}
