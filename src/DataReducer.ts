import { DataAction, DataState } from "./types";

const reducer = (state: DataState, action: DataAction) => {
  switch (action.type) {
    case "LOAD_QUESTIONS":
      return {
        ...state,
        questions: action.payload.questions,
        totalQuestions: action.payload.questions.length,
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
      };
    default:
      return state;
  }
};

export default reducer;
