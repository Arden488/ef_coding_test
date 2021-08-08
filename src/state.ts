import React from "react";

export type SetLoading = {
  type: "SET_LOADING";
  payload: { isLoading: boolean };
};
export type SetError = {
  type: "SET_ERROR";
  payload: { isError: boolean; isLoading: boolean };
};
export type StartQuiz = {
  type: "START_QUIZ";
  payload: {
    settings: Settings;
  };
};
export type LoadQuestions = {
  type: "LOAD_QUESTIONS";
  payload: { questions: OriginalDataType[] };
};
export type FinishQuiz = {
  type: "FINISH_QUIZ";
};
export type ConfirmAnswer = {
  type: "CONFIRM_ANSWER";
  payload: { question: Result };
};
export type ResetQuiz = { type: "RESET_QUIZ" };

export enum ActionType {
  SetLoading,
  SetError,
  StartQuiz,
  LoadQuestions,
  FinishQuiz,
  ConfirmAnswer,
  ResetQuiz,
}

export type AppAction =
  | SetLoading
  | SetError
  | StartQuiz
  | LoadQuestions
  | FinishQuiz
  | ConfirmAnswer
  | ResetQuiz;

export type Settings = {
  num: number;
  category: number;
};

export type Result = {
  answer: string;
  correct: boolean;
  question: string;
  correct_answer: string;
};

export type QuizStatus = "NOT_STARTED" | "STARTED" | "FINISHED";

export type OriginalDataType = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionType = {
  question: string;
  choices: string[];
  correct_answer: string;
};

export type AppState = {
  quizStatus: QuizStatus;
  questions: OriginalDataType[];
  results: Result[];
  totalQuestions: number;
  questionIndex: number;
  isLoading: boolean;
  isError: boolean;
  settings: Settings;
};

export type AppDispatch = {
  action: string;
  payload: any;
};
