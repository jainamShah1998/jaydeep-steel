export default function Sourcing() {
  return (
    <section id="sourcing" className="plate-texture py-24 md:py-32 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-[12px] tracking-[0.25em] text-orange-hot uppercase mb-4">
            How We Trade
          </p>
          <h2 className="font-display uppercase text-4xl md:text-5xl leading-[1.02] text-offwhite max-w-lg">
            Merchant on the Yard.
            <br />
            Agent on the Deal.
          </h2>
          <p className="font-body text-offwhite/65 text-[15px] md:text-base leading-relaxed mt-7 max-w-md">
            We hold and trade material directly out of our Ahmedabad yard, and
            we broker consignments as commission agents when a mill needs a
            buyer or a site needs tonnage we don&apos;t stock. Either way, the
            same discipline applies: verified heat numbers, checked mill test
            certificates, and a quote that holds once it&apos;s given.
          </p>

          <dl className="grid grid-cols-2 gap-6 mt-10 max-w-md">
            <div className="border-t border-line pt-4">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-light">
                Direct Stock
              </dt>
              <dd className="font-body text-offwhite/80 text-[14px] mt-1.5">
                Yard-held structural, TMT and pipe inventory for immediate lift.
              </dd>
            </div>
            <div className="border-t border-line pt-4">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-light">
                Commission Sourcing
              </dt>
              <dd className="font-body text-offwhite/80 text-[14px] mt-1.5">
                Mill-direct placement for volumes beyond standing stock.
              </dd>
            </div>
          </dl>
        </div>

        {/* Signature element — a mill test certificate rendered as a stamped strip */}
        <div className="reveal font-mono bg-charcoal-2 border border-line text-offwhite/85 text-[12px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-line">
            <span className="uppercase tracking-[0.2em] text-[11px] text-slate-light">
              Mill Test Certificate
            </span>
            <span className="text-orange-hot uppercase text-[11px] tracking-widest">
              Verified
            </span>
          </div>
          <div className="px-6 py-6 space-y-4">
            <Row label="Material" value="TMT Rebar, Fe 500D" />
            <Row label="Heat No." value="HT-2026-0417" />
            <Row label="Size" value="12mm — 32mm" />
            <Row label="Standard" value="IS 1786:2008" />
            <Row label="UTS / YS Ratio" value="Within Spec" />
            <Row label="Elongation" value="Within Spec" />
          </div>
          <div className="px-6 py-4 border-t border-line flex items-center justify-between">
            <span className="text-[10px] tracking-widest uppercase text-slate-light">
              Jaydeep Steel - Iron, Steel Merchant and Commission Agent
            </span>
            <span className="w-9 h-9 border border-orange-hot text-orange-hot flex items-center justify-center rotate-[-6deg] text-[9px] uppercase tracking-tight">
              OK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-light uppercase tracking-wide text-[11px]">
        {label}
      </span>
      <span className="text-offwhite">{value}</span>
    </div>
  );
}
