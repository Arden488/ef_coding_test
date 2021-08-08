import { act, fireEvent, render, screen } from "@testing-library/react";
import { useReducer } from "react";
import { AppContext, initialState } from "../../AppContext";
import reducer from "../../reducer";
import Quiz from "./Quiz";
import questions from "../../__fixtures__/questions";

const initialValues = {
  ...initialState,
  quizStatus: "STARTED",
  questionIndex: 0,
  totalQuestions: 1,
};

const Wrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Quiz />
    </AppContext.Provider>
  );
};

beforeEach(() => {
  fetch.resetMocks();
});

test("renders quiz header", async () => {
  fetch.mockResponseOnce(JSON.stringify(questions));

  await act(async () => render(<Wrapper />));

  expect(screen.getByText("Question #1 out of 10")).toBeInTheDocument();
});

test("renders quiz body", async () => {
  fetch.mockResponseOnce(JSON.stringify(questions));

  await act(async () => render(<Wrapper />));

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

  await act(async () => render(<Wrapper />));

  expect(screen.getByText("Next")).toBeInTheDocument();
});

test("renders question", async () => {
  fetch.mockResponseOnce(JSON.stringify(questions));

  await act(async () => render(<Wrapper />));

  const question = await screen.findByText(
    'What was the name of the sea witch in the 1989 Disney film "The Little Mermaid"?'
  );

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(question).toBeInTheDocument();
});
