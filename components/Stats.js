const STATS = [
  { value: "27+", label: "Years in Trade" },
  { value: "9,000T", label: "Moved Annually" },
  { value: "40+", label: "Mill & Buyer Ties" },
  { value: "ISO 9001", label: "Certified Process" },
];

export default function Stats() {
  return (
    <section className="plate-texture border-b border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="reveal border-l-2 border-orange/70 pl-4 md:pl-5"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="font-mono text-3xl md:text-4xl text-offwhite">
                {s.value}
              </div>
              <div className="font-body text-[12px] md:text-[13px] tracking-wide text-slate-light uppercase mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
