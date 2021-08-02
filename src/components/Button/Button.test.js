import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

test("render button correctly", () => {
  render(<Button>Text</Button>);

  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("render disabled button correctly", () => {
  render(<Button disabled={true}>Text</Button>);

  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});

test("handler is working", () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Text</Button>);

  const choice = screen.getByRole("button");
  fireEvent.click(choice);

  expect(onClick).toHaveBeenCalledTimes(1);
});
