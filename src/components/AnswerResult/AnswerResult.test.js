import { render, screen } from "@testing-library/react";
import AnswerResult from "./AnswerResult";
import resultsData from "../../__fixtures__/results";

test("renders incorrect result", () => {
  render(<AnswerResult data={{ ...resultsData[1] }} />);

  expect(
    screen.getByText(
      "What is the cartoon character, Andy Capp, known as in Germany?"
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Your answer: Dick Tingeler")).toBeInTheDocument();
  expect(
    screen.getByText("Sorry, the correct answer is: Willi Wakker")
  ).toBeInTheDocument();
});

test("renders correct result", () => {
  render(<AnswerResult data={{ ...resultsData[0] }} />);

  expect(
    screen.getByText(
      'What was the name of the sea witch in the 1989 Disney film "The Little Mermaid"?'
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Your answer: Ursula")).toBeInTheDocument();
  expect(screen.getByText("Correct!")).toBeInTheDocument();
});
