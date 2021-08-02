import "./Button.css";

export default function Button({ children, variant = "normal", ...props }) {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
