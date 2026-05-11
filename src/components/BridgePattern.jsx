export default function BridgePattern({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <div className="bridge-mark">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
