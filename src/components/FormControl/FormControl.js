import "./FormControl.css";

export default function FormControl({ label, error, children }) {
  return (
    <label className="form-control">
      {label && <span className="form-control-label">{label}</span>}
      <span className="form-control-field">{children}</span>
      {error && <span className="form-control-error">{error}</span>}
    </label>
  );
}
