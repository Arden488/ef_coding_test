import { render, screen } from "@testing-library/react";
import Results from "./Results";
import results from "../../__fixtures__/results";

test("renders header", () => {
  render(<Results results={results} />);
  const heading = screen.getByRole("heading", {
    name: "Thank you for taking our quiz! Your result: 1 / 3",
  });
  expect(heading).toBeInTheDocument();
});

test("renders three result list items", () => {
  const { container } = render(<Results results={results} />);

  const items = container.getElementsByClassName("answer-result-question");

  expect(items.length).toBe(3);
});
