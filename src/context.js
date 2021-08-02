import { createContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  quizStatus: "NOT_STARTED",
  questions: [],
  results: [],
  totalQuestions: 0,
  questionIndex: 0,
  isLoading: false,
  isError: false,
  settings: { num: 10, category: 32 },
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext, initialState };
