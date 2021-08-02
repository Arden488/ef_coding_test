import { act, fireEvent, render, screen } from "@testing-library/react";
import AnswerChoice from "./AnswerChoice";

test("renders choice", () => {
  const { container } = render(<AnswerChoice>Text</AnswerChoice>);

  expect(screen.getByText("Text")).toBeInTheDocument();
});

test("renders active choice", () => {
  const { container } = render(<AnswerChoice isActive>Text</AnswerChoice>);

  expect(container.getElementsByClassName("answer-choice_active").length).toBe(
    1
  );
});

test("handler is working", () => {
  const onClick = jest.fn();
  const { container } = render(
    <AnswerChoice handleChoice={onClick}>Text</AnswerChoice>
  );

  const choice = screen.getByText("Text");
  fireEvent.click(choice);

  expect(onClick).toHaveBeenCalledTimes(1);
});
