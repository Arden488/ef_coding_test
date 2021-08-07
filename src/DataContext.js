import { createContext, useReducer } from "react";
import reducer from "./DataReducer";

const DataContext = createContext();

const initialState = {
  questions: [],
  results: [],
  totalQuestions: 0,
  questionIndex: 0,
};

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext, initialState };
