import React from "react";
import { render, screen } from "@testing-library/react";
import AnswerResultList from "./AnswerResultList";
import resultsData from "../../__fixtures__/results";

test("renders three result list items", () => {
  const { container } = render(<AnswerResultList questions={resultsData} />);

  const items = container.getElementsByClassName("answer-result");

  expect(items.length).toBe(3);
});

test("renders text placeholder if no items provided", () => {
  const { container } = render(<AnswerResultList />);

  const items = container.getElementsByClassName("answer-result");

  expect(items.length).toBe(0);
  expect(
    screen.getByText("Sorry, no results are recorded...")
  ).toBeInTheDocument();
});
