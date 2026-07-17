export default function Navbar() {
  const links = [
    { href: "#products", label: "Product Range" },
    { href: "#sourcing", label: "Sourcing" },
    { href: "#industries", label: "Industries" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-charcoal/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative w-8 h-8 shrink-0" aria-hidden="true">
            <span className="absolute inset-0 border-2 border-offwhite rotate-45 group-hover:border-orange transition-colors" />
            <span className="absolute inset-[7px] bg-orange" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display uppercase tracking-wide text-[15px] md:text-base text-offwhite">
              Jaydeep Steel
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-light uppercase mt-1">
              Iron, Steel Merchant and Commission Agent
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-slate-light hover:text-offwhite transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+91 9227217011"
            className="hidden sm:block font-mono text-[13px] text-offwhite/90 hover:text-orange-hot transition-colors"
          >
            +91 92272 17011
          </a>
          <a
            href="#contact"
            className="bg-orange hover:bg-orange-hot text-offwhite font-display uppercase tracking-wide text-[13px] px-4 py-2.5 transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
