const levels = [
  "Board of Directors",
  "CEO & CFO",
  "Subsidiary Managing Directors",
  "Operational Teams",
];

export default function GovernanceDiagram({ detailed = false }) {
  return (
    <div className={detailed ? "governance-diagram detailed" : "governance-diagram"}>
      {levels.map((level, index) => (
        <div key={level} className="governance-row">
          <div className="governance-box">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{level}</strong>
          </div>
          {index < levels.length - 1 ? <div className="governance-connector" aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}
