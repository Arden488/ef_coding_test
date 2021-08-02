import { render, screen } from "@testing-library/react";
import { useReducer } from "react";
import { AppContext, initialState } from "../../context";
import reducer from "../../reducer";
import Results from "./Results";
import results from "../../__fixtures__/results";

const initialValues = {
  ...initialState,
  results,
};

const Wrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Results />
    </AppContext.Provider>
  );
};

test("renders header", () => {
  render(<Wrapper />);
  const heading = screen.getByRole("heading", {
    name: "Thank you for taking our quiz! Your result: 1 / 3",
  });
  expect(heading).toBeInTheDocument();
});

test("renders three result list items", () => {
  const { container } = render(<Wrapper />);

  const items = container.getElementsByClassName("answer-result__question");

  expect(items.length).toBe(3);
});
