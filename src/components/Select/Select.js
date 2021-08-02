import "./Select.css";

export default function Select({ name, value, options, onChange, ...props }) {
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
