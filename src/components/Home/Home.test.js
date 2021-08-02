import { fireEvent, render, screen } from "@testing-library/react";
import { useReducer } from "react";
import { AppContext, initialState } from "../../context";
import reducer from "../../reducer";
import Home from "./Home";

// const initialValues = {
//   ...initialState,

// };

const Wrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Home />
    </AppContext.Provider>
  );
};

test("renders correctly", () => {
  render(<Wrapper />);
  const input = screen.getByRole("spinbutton");
  const select = screen.getByRole("combobox");
  const intro = screen.getByText('Click "Start" button to begin a new quiz');
  const button = screen.getByRole("button");
  expect(input).toBeInTheDocument();
  expect(select).toBeInTheDocument();
  expect(intro).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders proper value after change", async () => {
  render(<Wrapper />);
  const input = screen.getByRole("spinbutton");
  const select = screen.getByRole("combobox");

  expect(input.value).toBe("10");
  expect(select.value).toBe("32");

  fireEvent.change(input, { target: { value: "3" } });
  fireEvent.change(select, { target: { value: "31" } });

  expect(input.value).toBe("3");
  expect(select.value).toBe("31");
});

test("renders error after invalid change", async () => {
  render(<Wrapper />);
  const input = screen.getByRole("spinbutton");
  const select = screen.getByRole("combobox");

  fireEvent.change(input, { target: { value: "abc" } });

  const error = screen.getByText(
    "Number of questions must be between 1 and 99"
  );
  const start = screen.getByRole("button");

  expect(input.value).toBe("");
  expect(error).toBeInTheDocument();
  expect(start).toHaveAttribute("disabled");
});
