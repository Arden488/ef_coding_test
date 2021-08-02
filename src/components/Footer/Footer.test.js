import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer", () => {
  render(<Footer />);
  const text = screen.getByText("EF Coding Test - Anton Samoilov - 2021");
  expect(text).toBeInTheDocument();
});
