export default function Hero() {
  return (
    <section id="top" className="relative coil-texture pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Corner registration marks — evokes a cutting/fabrication drawing */}
      <div className="pointer-events-none absolute inset-6 md:inset-10 border border-offwhite/10">
        <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-orange/70" />
        <span className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-orange/70" />
        <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-orange/70" />
        <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-orange/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="reveal font-mono text-[12px] tracking-[0.25em] text-orange-hot uppercase mb-6">
          Ahmedabad, Gujarat — Est. Trading House
        </p>

        <h1
          className="reveal font-display uppercase text-offwhite leading-[0.98] text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.6rem] max-w-5xl"
          style={{ animationDelay: "0.08s" }}
        >
          Steel Sourced Right.
          <br />
          <span className="text-slate-light">Supplied on Spec.</span>
        </h1>

        <p
          className="reveal font-body text-offwhite/75 text-base md:text-lg max-w-xl mt-7 leading-relaxed"
          style={{ animationDelay: "0.16s" }}
        >
          Jaydeep Steel connects mills and buyers across
          Gujarat as merchants and commission agents — structural steel, TMT
          rebar, coils, pipes and plates, every consignment checked against
          mill test certificates before it leaves the yard.
        </p>

        <div
          className="reveal flex flex-wrap items-center gap-4 mt-10"
          style={{ animationDelay: "0.24s" }}
        >
          <a
            href="#contact"
            className="bg-orange hover:bg-orange-hot text-offwhite font-display uppercase tracking-wide text-sm px-7 py-4 transition-colors"
          >
            Request a Quote
          </a>
          <a
            href="#products"
            className="border border-offwhite/30 hover:border-offwhite text-offwhite font-display uppercase tracking-wide text-sm px-7 py-4 transition-colors"
          >
            View Product Range
          </a>
        </div>
      </div>
    </section>
  );
}
