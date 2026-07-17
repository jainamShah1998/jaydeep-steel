"use client";

import { useState } from "react";

export default function RfqForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line p-8 md:p-10">
        <p className="font-mono text-orange-hot text-[11px] uppercase tracking-widest mb-3">
          Request Received
        </p>
        <h3 className="font-display uppercase text-2xl text-offwhite mb-3">
          We&apos;ll respond within one business day.
        </h3>
        <p className="font-body text-offwhite/60 text-[14.5px]">
          A member of our team will confirm stock, pricing and lead time
          against your specification.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line p-8 md:p-10 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" type="text" required />
        <Field label="Company" name="company" type="text" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <div>
        <label
          htmlFor="specs"
          className="block font-mono text-[11px] uppercase tracking-widest text-slate-light mb-2"
        >
          Project Specifications
        </label>
        <textarea
          id="specs"
          name="specs"
          required
          rows={4}
          placeholder="Material, grade, size, quantity and delivery timeline"
          className="w-full bg-transparent border border-line focus:border-orange-hot px-4 py-3 font-body text-[14.5px] text-offwhite placeholder:text-slate-light outline-none transition-colors"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-orange hover:bg-orange-hot text-offwhite font-display uppercase tracking-wide text-sm px-8 py-4 transition-colors"
      >
        Submit Request
      </button>
    </form>
  );
}

function Field({ label, name, type, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[11px] uppercase tracking-widest text-slate-light mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-line focus:border-orange-hot px-4 py-3 font-body text-[14.5px] text-offwhite outline-none transition-colors"
      />
    </div>
  );
}
