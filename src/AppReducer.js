const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case "SET_ERROR":
      return {
        ...state,
        isError: action.payload.isError,
        isLoading: action.payload.isLoading,
      };
    case "START_QUIZ":
      return {
        ...state,
        settings: action.payload.settings,
        isLoading: true,
        quizStatus: "STARTED",
      };
    case "FINISH_QUIZ":
      return {
        ...state,
        quizStatus: "FINISHED",
      };
    case "RESET_QUIZ":
      return {
        ...state,
        quizStatus: "NOT_STARTED",
      };
    default:
      return state;
  }
};

export default reducer;
