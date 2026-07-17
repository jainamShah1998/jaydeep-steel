import RfqForm from "./RfqForm";

export default function ContactFooter() {
  return (
    <section id="contact" className="plate-texture">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <p className="font-mono text-[12px] tracking-[0.25em] text-orange-hot uppercase mb-4">
              Get a Quote
            </p>
            <h2 className="font-display uppercase text-4xl md:text-5xl leading-[1.02] text-offwhite mb-8">
              Send Your Spec.
              <br />
              We&apos;ll Price It.
            </h2>

            <div className="space-y-6 font-body text-[14.5px] text-offwhite/70">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-slate-light mb-1.5">
                  Yard &amp; Office
                </p>
                <p>
                  JAYDEEP STEEL
                  <br />
                  8, Manmohan Society,
                  <br />
                  Near Sharda Petrol Pump,
                  <br />
                  Chandekheda, Ahmedabad
                  <br />
                  Gujarat 382424.

                  <br />
                  GST: 24AFJPP0302G1ZY
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-slate-light mb-1.5">
                  Phone
                </p>
                <p>
                  <a href="tel:+919227217011" className="hover:text-orange-hot transition-colors">
                    +91 92272 17011
                  </a>
                  {/* <br />
                  <a
                    href="mailto:sales@shreeambicasteel.com"
                    className="hover:text-orange-hot transition-colors"
                  >
                    sales@shreeambicasteel.com
                  </a> */}
                </p>
              </div>
              {/* <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-slate-light mb-1.5">
                  Documentation
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-offwhite hover:text-orange-hot transition-colors underline underline-offset-4 decoration-line"
                >
                  Steel Grade Specifications Chart (PDF)
                </a>
                <br />
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-offwhite hover:text-orange-hot transition-colors underline underline-offset-4 decoration-line mt-1"
                >
                  Full Product Catalog (PDF)
                </a>
              </div> */}
            </div>
          </div>

          <div className="lg:col-span-3">
            <RfqForm />
          </div>
        </div>
      </div>

      <div className="hazard-rule" />

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-slate-light uppercase tracking-widest">
            © {new Date().getFullYear() - 1} Jaydeep Steel — Ahmedabad, Gujarat
          </p>
          <p className="font-mono text-[11px] text-slate-light uppercase tracking-widest">
            Iron, Steel Merchant and Commission Agent
          </p>
        </div>
      </div>
    </section>
  );
}
