import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import SectionHeading from "./components/SectionHeading";
import BridgePattern from "./components/BridgePattern";
import ValueCreationModel from "./components/ValueCreationModel";
import GovernanceDiagram from "./components/GovernanceDiagram";
import PortfolioCard from "./components/PortfolioCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import {
  approaches,
  boardRoles,
  imageSources,
  partnerGroups,
  partnershipOpportunities,
  pillars,
  portfolio,
  sectors,
  stats,
  whatWeDo,
} from "./data/siteData";

const logoSrc = `${import.meta.env.BASE_URL}assets/bridgeleaf-logo.png`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function AnchorButton({ href, children, variant = "primary" }) {
  return (
    <a href={href} className={variant === "primary" ? "btn-primary" : "btn-secondary"}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

function NumberedCard({ item, index }) {
  return (
    <motion.article
      className="angled-card group"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: "easeOut" }}
    >
      <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </motion.article>
  );
}

function SectorCard({ sector, index }) {
  return (
    <motion.div
      className="sector-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.035, duration: 0.38, ease: "easeOut" }}
    >
      <span aria-hidden="true" />
      <p>{sector}</p>
    </motion.div>
  );
}

function PillarCard({ pillar, index }) {
  return (
    <article className="pillar-card">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{pillar.title}</h3>
      <p>{pillar.body}</p>
    </article>
  );
}

function ListPanel({ title, items }) {
  return (
    <div className="list-panel">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-charcoal">
      <Header />

      <main id="main">
        <section id="home" className="hero-section">
          <BridgePattern className="-right-16 top-28 h-72 w-72 opacity-20" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-32 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-20 lg:pt-40">
            <motion.div className="min-w-0" initial="hidden" animate="visible" transition={{ staggerChildren: 0.11 }}>
              <motion.div variants={fadeUp} className="hero-eyebrow">
                BRIDGELEAF EQUITY HOLDINGS LTD
              </motion.div>
              <motion.h1 variants={fadeUp} className="hero-title">
                A Diversified Investment and Management Company
              </motion.h1>
              <motion.p variants={fadeUp} className="hero-tagline">
                Strategic Investments. Sustainable Growth.
              </motion.p>
              <motion.p variants={fadeUp} className="hero-copy">
                Bridge Leaf Equity Holdings Ltd is a dynamic investment holding company committed to unlocking value
                across emerging African markets. Rooted in Zambia and expanding across the region, the Group combines
                strategic acquisitions, disciplined capital allocation, operational oversight, and governance-led
                management to build resilient businesses.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <AnchorButton href="#portfolio">Explore Our Portfolio</AnchorButton>
                <AnchorButton href="#partners" variant="secondary">
                  Partner With Us
                </AnchorButton>
              </motion.div>
            </motion.div>

            <motion.figure
              className="hero-visual"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            >
              <img src={imageSources.hero} alt="Container yard and logistics truck representing African trade corridors" />
              <div className="hero-image-overlay" />
              <div className="hero-red-slab" aria-hidden="true" />
              <div className="hero-navy-block" aria-hidden="true" />
              <svg className="pathway-lines" viewBox="0 0 420 260" aria-hidden="true">
                <path d="M16 212 C 92 156, 138 180, 198 112 S 312 52, 404 84" />
                <path d="M42 48 C 116 88, 136 72, 198 116 S 318 176, 384 132" />
                <circle cx="198" cy="112" r="5" />
                <circle cx="312" cy="62" r="5" />
                <circle cx="384" cy="132" r="5" />
              </svg>
              <figcaption className="hero-caption">
                <span>Structured growth</span>
                <strong>Across African markets</strong>
              </figcaption>
            </motion.figure>
          </div>

          <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 lg:px-8">
            <div className="trust-strip">
              {stats.map((stat) => (
                <div key={stat}>
                  <span />
                  <p>{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="who-title">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="editorial-lockup">
              <span className="section-number text-red">01</span>
              <h2 id="who-title">Rooted in Zambia. Built for Regional Growth.</h2>
            </div>
            <div className="space-y-8">
              <p className="lead-copy">
                Bridge Leaf Equity Holdings Ltd is an investment holding and management company focused on identifying,
                acquiring, developing, and managing businesses across high-potential African markets. The Group supports
                both growth-stage and underperforming businesses through strategic capital deployment, governance
                discipline, and active portfolio oversight.
              </p>
              <div className="investment-badge">
                <div className="badge-grid" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div>
                  <p>Investment Group Mandate</p>
                  <strong>Acquire. Govern. Improve. Scale.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft bg-bridge-grid bg-[length:34px_34px]" aria-labelledby="what-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <SectionHeading
              number="02"
              eyebrow="What We Do"
              title="What We Do"
              copy="Bridge Leaf operates as an active holding and investment company, combining capital, management discipline, and strategic oversight to create long-term value."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whatWeDo.map((item, index) => (
                <NumberedCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="focus-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionHeading
                number="03"
                eyebrow="Investment Focus"
                title="Investment Focus"
                copy="The Group invests across sectors that support trade, movement, energy, infrastructure, and economic growth."
              />
              <div className="sector-grid">
                {sectors.map((sector, index) => (
                  <SectorCard key={sector} sector={sector} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section bg-navy-950 text-white" aria-labelledby="portfolio-title">
          <BridgePattern className="-left-20 top-10 h-64 w-64 opacity-10" />
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <SectionHeading
              number="04"
              eyebrow="Our Portfolio"
              title="Our Portfolio"
              copy="Bridge Leaf currently holds and manages investments in independent operating companies, each supported by group-level strategic oversight and disciplined governance."
              light
            />
            <div className="mt-12 grid gap-6">
              {portfolio.map((company, index) => (
                <PortfolioCard key={company.name} company={company} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="value-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <SectionHeading
              number="05"
              eyebrow="Value Creation"
              title="Value Creation Model"
              copy="Bridge Leaf creates value through disciplined investment, operational improvement, governance, and market expansion."
            />
            <div className="mt-12">
              <ValueCreationModel />
            </div>
          </div>
        </section>

        <section className="section py-0" aria-labelledby="vision-title">
          <div className="mx-auto grid max-w-7xl px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="vision-block bg-navy text-white">
              <span>Vision</span>
              <h2 id="vision-title">To build a leading African investment group recognized for transforming businesses and delivering sustainable value.</h2>
            </article>
            <article className="vision-block border border-slate-200 bg-soft text-charcoal">
              <span>Mission</span>
              <h2>To invest in, develop, and manage businesses through strategic capital deployment, operational excellence, and disciplined governance.</h2>
            </article>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="governance-preview-title">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeading
                number="06"
                eyebrow="Governance Preview"
                title="Governed with Discipline. Managed for Growth."
                copy="Bridge Leaf operates under a robust governance framework designed to ensure accountability, strategic oversight, and operational efficiency across all subsidiaries."
              />
              <div className="mt-8">
                <AnchorButton href="#governance">View Governance</AnchorButton>
              </div>
            </div>
            <GovernanceDiagram />
          </div>
        </section>

        <section className="cta-band" aria-labelledby="partners-cta-title">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
            <div>
              <p className="eyebrow text-white/60">Partners</p>
              <h2 id="partners-cta-title" className="mt-4 max-w-4xl text-3xl font-black text-white sm:text-5xl">
                Partnering for Growth, Transformation, and Long-Term Value
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/75">
                Bridge Leaf welcomes opportunities from business owners, investors, strategic partners, and companies
                seeking capital, restructuring, or acquisition-led growth.
              </p>
            </div>
            <AnchorButton href="#partners">Partner With Bridge Leaf</AnchorButton>
          </div>
        </section>

        <section id="about" className="section bg-soft" aria-labelledby="about-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeading
                number="07"
                eyebrow="About"
                title="Building Value Across Emerging African Markets"
                copy="Bridge Leaf combines financial expertise, strategic acquisitions, and operational excellence to build resilient businesses in key sectors. The company focuses on identifying undervalued or growth-stage businesses and unlocking value through structured investment and disciplined management."
              />
              <div className="about-image-panel">
                <img src={imageSources.lusaka} alt="Bank of Zambia building in Lusaka representing institutional governance" loading="lazy" />
                <div />
              </div>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <PillarCard key={pillar.title} pillar={pillar} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="governance" className="section bg-white" aria-labelledby="governance-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <SectionHeading
              number="08"
              eyebrow="Structure & Governance"
              title="Governed with Discipline. Managed for Growth."
              copy="Bridge Leaf Equity Holdings Ltd operates under a robust corporate governance framework designed to ensure accountability, strategic oversight, and operational efficiency across all its subsidiaries."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <GovernanceDiagram detailed />
              <div className="grid gap-4 sm:grid-cols-2">
                {boardRoles.map((role) => (
                  <article key={role.title} className="role-card">
                    <h3>{role.title}</h3>
                    <p>{role.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="governance-note">
                <h3>Subsidiary Management</h3>
                <p>
                  Each subsidiary operates with its own management team, headed by a Managing Director, responsible for
                  day-to-day operations and business objectives. Managing Directors report directly to the CEO and CFO of
                  Bridge Leaf, ensuring coordination between subsidiary operations and group-level oversight.
                </p>
              </article>
              <article className="governance-note dark">
                <h3>Investment Management</h3>
                <p>
                  The identification, evaluation, and management of strategic investments is undertaken by a dedicated
                  investment management team made up of qualified professionals with experience across key sectors. The
                  team ensures investment decisions align with long-term growth strategy and value creation objectives.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="strategy" className="section bg-navy-950 text-white" aria-labelledby="strategy-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <SectionHeading
                number="09"
                eyebrow="Investment Strategy"
                title="Strategic Capital. Operational Discipline. Sustainable Returns."
                copy="Bridge Leaf evaluates opportunities through a disciplined investment lens, pairing capital with governance, reporting, and hands-on operational oversight."
                light
              />
              <div className="strategy-quote">
                <p>
                  "Structured growth is built through the same habits that protect capital: clarity of mandate,
                  disciplined execution, and accountable operating leadership."
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {approaches.map((item, index) => (
                <NumberedCard key={item.title} item={item} index={index} />
              ))}
            </div>

            <div className="mt-12 rounded-none border border-white/10 bg-white/[0.03] p-5 sm:p-8">
              <ValueCreationModel compact />
            </div>
          </div>
        </section>

        <section id="partners" className="section bg-white" aria-labelledby="partners-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeading
                number="10"
                eyebrow="Partners"
                title="Partnering With Bridge Leaf"
                copy="Bridge Leaf seeks to partner with business owners, investors, strategic partners, and acquisition opportunities aligned with its mandate."
              />
              <div className="grid gap-5 md:grid-cols-2">
                <ListPanel title="Who We Partner With" items={partnerGroups} />
                <ListPanel title="Partnership Opportunities" items={partnershipOpportunities} />
              </div>
            </div>
            <div className="partners-question">
              <p>Have an opportunity that aligns with our investment mandate?</p>
              <AnchorButton href="#contact">Contact Bridge Leaf</AnchorButton>
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-soft" aria-labelledby="contact-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <SectionHeading
                  number="11"
                  eyebrow="Contact"
                  title="Contact Bridge Leaf Equity Holdings Ltd"
                  copy="For investment opportunities, strategic partnerships, portfolio inquiries, or business rescue discussions, contact the Bridge Leaf head office in Lusaka."
                />
                <div className="contact-details">
                  <div>
                    <span>Head Office</span>
                    <p>
                      Plot 13968 Chandwe Musonda Road, Light Industrial Area
                      <br />
                      Lusaka, Zambia
                    </p>
                  </div>
                  <div>
                    <span>Email</span>
                    <p>info@bridgeleafequity.com</p>
                  </div>
                  <div>
                    <span>Phone</span>
                    <p>(+260 211 250 420)</p>
                  </div>
                </div>
                <div className="map-panel" aria-label="Map placeholder for Bridge Leaf head office in Lusaka">
                  <div className="map-grid" aria-hidden="true" />
                  <img src={logoSrc} alt="" aria-hidden="true" />
                  <p>Light Industrial Area, Lusaka</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
