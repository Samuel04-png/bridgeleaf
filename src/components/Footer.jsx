import { navigation } from "../data/siteData";

const logoSrc = `${import.meta.env.BASE_URL}assets/bridgeleaf-logo.png`;

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="inline-flex bg-white p-3">
            <img src={logoSrc} alt="Bridge Leaf Equity Holdings Ltd logo" className="h-10 w-auto" />
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Strategic Investments. Sustainable Growth. A Zambia-based investment holding and management company
            building resilient businesses across emerging African markets.
          </p>
        </div>
        <div>
          <h2 className="footer-title">Navigation</h2>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="footer-title">Head Office</h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            Plot 13968 Chandwe Musonda Road, Light Industrial Area
            <br />
            Lusaka, Zambia
          </p>
          <p className="mt-5 text-sm leading-7 text-white/70">
            info@bridgeleafequity.com
            <br />
            (+260 211 250 420)
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        Bridge Leaf Equity Holdings Ltd
      </div>
    </footer>
  );
}
