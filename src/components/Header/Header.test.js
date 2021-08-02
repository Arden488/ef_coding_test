import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header", () => {
  render(<Header />);
  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("Quiz");
});
