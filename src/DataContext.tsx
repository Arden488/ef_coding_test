import { Context, createContext, useReducer } from "react";
import reducer from "./DataReducer";
import { DataAction, DataState } from "./types";

const initialState: DataState = {
  questions: [],
  results: [],
  totalQuestions: 0,
  questionIndex: 0,
};

const DataContext = createContext<{
  state: DataState;
  dispatch: React.Dispatch<DataAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

function DataProvider({ children }: { children?: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext, initialState };
