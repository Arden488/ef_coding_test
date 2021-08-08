import { InputHTMLAttributes } from "react";
import "./TextInput.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({
  name,
  type = "text",
  value,
  onChange,
  ...props
}: Props) {
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
