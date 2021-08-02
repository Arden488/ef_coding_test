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
    case "LOAD_QUESTIONS":
      return {
        ...state,
        isLoading: false,
        questions: action.payload.questions,
        totalQuestions: action.payload.questions.length,
      };
    case "FINISH_QUIZ":
      return {
        ...state,
        quizStatus: "FINISHED",
      };
    case "CONFIRM_ANSWER":
      return {
        ...state,
        results: [...state.results, action.payload.question],
        questionIndex: state.questionIndex + 1,
      };
    case "RESET_QUIZ":
      return {
        ...state,
        results: [],
        questions: [],
        totalQuestions: 0,
        questionIndex: 0,
        quizStatus: "NOT_STARTED",
      };
    default:
      return state;
  }
};

export default reducer;
