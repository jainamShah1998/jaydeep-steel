const SECTORS = [
  "Construction & Real Estate",
  "Infrastructure & EPC",
  "Structural Fabrication",
  "Re-Rolling Mills",
  "Pipe Manufacturing",
  "Engineering & MEP",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-offwhite text-charcoal py-20 md:py-24 border-t border-charcoal/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-[12px] tracking-[0.25em] text-orange uppercase mb-8 text-center">
          Industries We Supply
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {SECTORS.map((s) => (
            <span
              key={s}
              className="font-display uppercase text-[13px] md:text-sm tracking-wide text-charcoal/55 border border-charcoal/15 px-5 py-3 hover:text-charcoal hover:border-orange transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
