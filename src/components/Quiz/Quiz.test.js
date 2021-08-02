import { act, render, screen } from "@testing-library/react";
import Quiz from "./Quiz";
import questions from "../../__fixtures__/questions";

beforeEach(() => {
  fetch.resetMocks();
});

test("renders quiz header", async () => {
  fetch.mockResponseOnce(JSON.stringify(questions));

  await act(async () => render(<Quiz questionIndex={0} />));

  expect(screen.getByText("Question #1 out of 10")).toBeInTheDocument();
});

test("renders quiz body", async () => {
  fetch.mockResponseOnce(JSON.stringify(questions));

  await act(async () => render(<Quiz questionIndex={0} />));

  expect(
    screen.getByText(
      'What was the name of the sea witch in the 1989 Disney film "The Little Mermaid"?'
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Maleficent")).toBeInTheDocument();
  expect(screen.getByText("Lady Tremaine")).toBeInTheDocument();
  expect(screen.getByText("Ursula")).toBeInTheDocument();
  expect(screen.getByText("Madam Mim")).toBeInTheDocument();
});

test("renders quiz footer", async () => {
  fetch.mockResponseOnce(JSON.stringify(questions));

  await act(async () => render(<Quiz questionIndex={0} />));

  expect(screen.getByText("Next")).toBeInTheDocument();
});
