import { SelectHTMLAttributes } from "react";
import "./Select.css";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[][];
}

export default function Select({
  name,
  value,
  options,
  onChange,
  ...props
}: Props) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="select"
      {...props}
    >
      {options &&
        options.map((option) => (
          <option key={option[0]} value={option[0]}>
            {option[1]}
          </option>
        ))}
    </select>
  );
}
