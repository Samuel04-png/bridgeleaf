import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionHeading({ number, eyebrow, title, copy, light = false, max = "max-w-3xl" }) {
  return (
    <motion.div
      className={`${max} ${light ? "text-white" : "text-charcoal"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={reveal}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mb-5 flex items-center gap-4">
        <span className={`section-number ${light ? "text-white/70" : "text-red"}`}>{number}</span>
        <span className={`eyebrow ${light ? "text-white/70" : "text-navy"}`}>{eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className={`section-copy ${light ? "text-white/75" : "text-slate-600"}`}>{copy}</p> : null}
    </motion.div>
  );
}
