function IconBeam() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 9h28M6 31h28M20 9v22M11 9l-3 4M29 9l3 4M11 31l-3-4M29 31l3-4" strokeLinecap="round" />
    </svg>
  );
}
function IconRebar() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 32C8 20 8 20 20 20S32 20 32 8" strokeLinecap="round" />
      <path d="M11 8h6M11 8v6M29 32h-6M29 32v-6" strokeLinecap="round" />
    </svg>
  );
}
function IconCoil() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="8.5" />
      <circle cx="20" cy="20" r="4" />
    </svg>
  );
}
function IconPipe() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="20" rx="5" ry="10" />
      <path d="M12 10v20M28 8v20" strokeLinecap="round" />
      <ellipse cx="28" cy="18" rx="5" ry="10" />
    </svg>
  );
}
function IconPlate() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="7" y="10" width="26" height="6" />
      <rect x="7" y="17" width="26" height="6" />
      <rect x="7" y="24" width="26" height="6" />
    </svg>
  );
}
function IconScrap() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M20 6l4 8-9 3 11 2-3 9-5-7-6 6 2-10-8-2 9-4-3-9z" strokeLinejoin="round" />
    </svg>
  );
}

const PRODUCTS = [
  {
    icon: IconBeam,
    title: "Structural Steel",
    copy:
      "ISMB, ISMC, ISA angles and channels in IS 2062 grades E250 to E350, stocked in standard rolling lengths for fabrication and EPC sites.",
  },
  {
    icon: IconRebar,
    title: "TMT Rebar",
    copy:
      "Fe 500 and Fe 500D corrosion-resistant bars from 8mm to 32mm, sourced batch-wise with mill test certificates for every heat number.",
  },
  {
    icon: IconCoil,
    title: "HR / CR Coils & Sheets",
    copy:
      "Hot-rolled and cold-rolled coils in thickness from 0.9mm to 12mm, traded for re-rollers, pipe mills and sheet fabricators.",
  },
  {
    icon: IconPipe,
    title: "MS Pipes & Tubes",
    copy:
      "ERW and seamless pipes to IS 1239 and IS 3589 for water, structural and process piping, supplied in bulk consignment lots.",
  },
  {
    icon: IconPlate,
    title: "MS Plates",
    copy:
      "IS 2062 plates from 5mm to 40mm thickness for base plates, gusset work and heavy fabrication, cut-to-size on request.",
  },
  {
    icon: IconScrap,
    title: "Scrap & Commission Trading",
    copy:
      "Melting and industrial scrap grading, plus commission-agent placement between regional mills and end buyers on negotiated terms.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-offwhite text-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="font-mono text-[12px] tracking-[0.25em] text-orange uppercase mb-4">
              Product Range
            </p>
            <h2 className="font-display uppercase text-4xl md:text-5xl leading-[1.02] max-w-xl">
              What Moves Through the Yard
            </h2>
          </div>
          <p className="font-body text-charcoal/60 max-w-sm text-[15px] leading-relaxed">
            Every category below is traded against declared IS specification
            and mill grade — nothing leaves without paperwork to match.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
          {PRODUCTS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group bg-offwhite hover:bg-white p-8 md:p-9 transition-colors relative"
              >
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-orange group-hover:w-full transition-all duration-300" />
                <div className="text-steel group-hover:text-orange transition-colors mb-6">
                  <Icon />
                </div>
                <h3 className="font-display uppercase text-xl mb-3 tracking-wide">
                  {p.title}
                </h3>
                <p className="font-body text-[14.5px] leading-relaxed text-charcoal/65">
                  {p.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
