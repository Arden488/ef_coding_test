import { render, screen } from "@testing-library/react";
import FormControl from "./FormControl";
import TextInput from "../TextInput/TextInput";

test("render form control correctly", () => {
  render(<FormControl label="Text"></FormControl>);

  expect(screen.getByText("Text")).toBeInTheDocument();
});

test("render form control with input", () => {
  render(
    <FormControl label="Text">
      <TextInput />
    </FormControl>
  );

  expect(screen.getByText("Text")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("render form control with error", () => {
  render(
    <FormControl error="some error" label="Text">
      <TextInput />
    </FormControl>
  );

  expect(screen.getByText("some error")).toBeInTheDocument();
});
