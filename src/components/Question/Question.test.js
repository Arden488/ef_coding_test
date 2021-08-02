import { render, screen } from "@testing-library/react";
import Question from "./Question";
import currentQuestion from "../../__fixtures__/question";

test("renders question", () => {
  render(
    <Question
      question={currentQuestion.question}
      choices={currentQuestion.choices}
    />
  );

  expect(
    screen.getByText("Who voiced Finn in Adventure Time?")
  ).toBeInTheDocument();
  expect(screen.getByText("Jeremy Shada")).toBeInTheDocument();
  expect(screen.getByText("Nolan North")).toBeInTheDocument();
  expect(screen.getByText("John DiMaggio")).toBeInTheDocument();
  expect(screen.getByText("Tom Kenny")).toBeInTheDocument();
});
