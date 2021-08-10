import { createContext, useReducer } from "react";
import reducer from "./AppReducer";
import { AppAction, AppState } from "./types";

const initialState: AppState = {
  quizStatus: "NOT_STARTED",
  isLoading: false,
  isError: false,
  settings: { num: 10, category: 32 },
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

function AppProvider({ children }: { children?: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext, initialState };
