import { fireEvent, render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

test("render text input correctly", () => {
  render(<TextInput />);

  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("render text input with value", () => {
  render(<TextInput value="123" onChange={() => {}} />);

  expect(screen.getByRole("textbox")).toHaveAttribute("value", "123");
});

test("handler is working", () => {
  const onChange = jest.fn();
  render(<TextInput value="123" onChange={onChange} />);

  const textbox = screen.getByRole("textbox");
  fireEvent.change(textbox, { target: { value: "321" } });

  expect(onChange).toHaveBeenCalledTimes(1);
});
