import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

test("renders loader", () => {
  render(<Loader />);
  const heading = screen.getByText("Loading questions...");
  expect(heading).toBeInTheDocument();
});
