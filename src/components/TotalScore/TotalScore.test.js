import { render, screen } from "@testing-library/react";
import TotalScore from "./TotalScore";

test("renders header", () => {
  render(<TotalScore correct={5} total={10} />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("renders correct numbers", () => {
  render(<TotalScore correct={5} total={10} />);
  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("Your result: 5 / 10");
});
