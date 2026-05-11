import { motion } from "framer-motion";
import { valueDrivers, valueSteps } from "../data/siteData";

export default function ValueCreationModel({ compact = false }) {
  return (
    <div className={compact ? "value-wrap compact" : "value-wrap"}>
      <div className="value-line" aria-hidden="true" />
      <div className="grid gap-5 md:grid-cols-5">
        {valueSteps.map((step, index) => (
          <motion.div
            key={step}
            className="value-node"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
          >
            <span className="value-index">{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </motion.div>
        ))}
      </div>

      {!compact ? (
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {valueDrivers.map((driver) => (
            <div key={driver} className="driver-pill">
              {driver}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
