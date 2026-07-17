const SPECS = [
  "IS 2062 E250 / E350",
  "Fe 500D TMT REBAR",
  "IS 1239 GI PIPE",
  "ISMB · ISMC · ISA STRUCTURALS",
  "HR / CR COILS & SHEETS",
  "IS 2830 MS PLATES",
  "MELTING & INDUSTRIAL SCRAP",
  "MTC VERIFIED ON DISPATCH",
];

export default function SpecTicker() {
  const items = [...SPECS, ...SPECS];

  return (
    <div
      className="relative bg-steel-2 border-y border-line overflow-hidden"
      role="img"
      aria-label="Grades and specifications traded: IS 2062, Fe 500D TMT, IS 1239 GI Pipe, ISMB/ISMC/ISA structurals, HR/CR coils and sheets, IS 2830 MS plates, melting scrap, MTC verified on dispatch."
    >
      <div className="flex whitespace-nowrap py-3.5 marquee-track" aria-hidden="true">
        {items.map((s, i) => (
          <span
            key={i}
            className="font-mono text-[12px] md:text-[13px] tracking-[0.12em] text-offwhite/85 uppercase flex items-center gap-6 pr-6"
          >
            {s}
            <span className="text-orange-hot">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
