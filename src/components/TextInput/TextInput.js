import "./TextInput.css";

export default function TextInput({
  name,
  type = "text",
  value,
  onChange,
  ...props
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="text-input"
      {...props}
    />
  );
}
