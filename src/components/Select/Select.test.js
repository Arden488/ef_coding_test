import { fireEvent, render, screen } from "@testing-library/react";
import Select from "./Select";

test("render select correctly", () => {
  render(<Select options={[["1", "Some"]]} />);

  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("render select with two options", () => {
  render(
    <Select
      options={[
        ["1", "Some"],
        ["2", "Other"],
      ]}
    />
  );

  expect(screen.getAllByRole("option").length).toEqual(2);
});

test("handler is working", () => {
  const onChange = jest.fn();
  render(<Select onChange={onChange} />);

  const combobox = screen.getByRole("combobox");
  fireEvent.change(combobox, { target: { value: "321" } });

  expect(onChange).toHaveBeenCalledTimes(1);
});
