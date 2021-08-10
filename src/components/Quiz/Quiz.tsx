import { useContext, useCallback, useEffect, useState } from "react";
import shuffle from "lodash/shuffle";

import { AppContext } from "../../AppContext";
import { DataContext } from "../../DataContext";

import Question from "../Question/Question";

import "./Quiz.css";
import { OriginalDataType, QuestionType } from "../../types";

export default function Quiz() {
  const { state: DataState, dispatch: DataDispatch } = useContext(DataContext);
  const { state: AppState, dispatch: AppDispatch } = useContext(AppContext);
  const { questions, questionIndex, totalQuestions } = DataState;
  const { settings } = AppState;

  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(
    null
  );

  // Fetch data
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${settings.num}&category=${settings.category}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.results && result.results.length > 0) {
          DataDispatch({
            type: "LOAD_QUESTIONS",
            payload: { questions: result.results },
          });
          AppDispatch({
            type: "SET_LOADING",
            payload: { isLoading: false },
          });
        } else {
          AppDispatch({
            type: "SET_ERROR",
            payload: {
              isLoading: false,
              isError: true,
            },
          });
        }
      })
      .catch(() => {
        AppDispatch({
          type: "SET_ERROR",
          payload: {
            isLoading: false,
            isError: true,
          },
        });
      });
  }, [settings, DataDispatch, AppDispatch]);

  // Check if it is the last question. If it is - set finish state.
  // Else - prepare new question
  useEffect(() => {
    if (!questions || questions.length <= 0) return;

    // Utility function to shuffle answers to avoid
    // predictable position of the corrent answer
    const getCurrentQuestionData = (originalData: OriginalDataType) => {
      const { correct_answer, incorrect_answers, question } = originalData;
      const choices = shuffle([correct_answer, ...incorrect_answers]);
      return { question, choices, correct_answer };
    };

    if (questionIndex === questions.length) {
      AppDispatch({
        type: "FINISH_QUIZ",
      });
    } else {
      const newQuestion = getCurrentQuestionData(questions[questionIndex]);
      setCurrentQuestion(newQuestion);
    }
  }, [questions, questionIndex, AppDispatch]);

  if (!currentQuestion) return null;

  const { question, choices } = currentQuestion;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-header">
        Question #{questionIndex + 1} out of {totalQuestions}
      </div>
      <Question question={question} choices={choices} />
    </div>
  );
}
