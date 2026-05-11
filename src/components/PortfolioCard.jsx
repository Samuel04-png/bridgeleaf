import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioCard({ company, index }) {
  const isExternal = company.href.startsWith("http");

  return (
    <motion.article
      className="portfolio-card group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    >
      <img src={company.image} alt={company.alt} loading="lazy" />
      <div className="portfolio-overlay" />
      <div className="portfolio-content">
        <div className="flex items-start justify-between gap-4">
          <span className="portfolio-tag">Portfolio Company</span>
          <span className="portfolio-count">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{company.sector}</p>
          <h3 className="text-3xl font-black text-white">{company.name}</h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/80">{company.description}</p>
        </div>
        <a
          className="portfolio-link"
          href={company.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          Visit Website
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
