import { useContext, useEffect, useState } from "react";
import shuffle from "lodash/shuffle";

import { AppContext } from "../../context";

import Question from "../Question/Question";
import Button from "../Button/Button";

import "./Quiz.css";

export default function Quiz() {
  const { state, dispatch } = useContext(AppContext);
  const { settings, questions, questionIndex, totalQuestions } = state;

  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Fetch data
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${settings.num}&category=${settings.category}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.results && result.results.length > 0) {
          dispatch({
            type: "LOAD_QUESTIONS",
            payload: { questions: result.results },
          });
        } else {
          dispatch({
            type: "SET_ERROR",
            payload: {
              isLoading: false,
              isError: true,
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: "SET_ERROR",
          payload: {
            isLoading: false,
            isError: true,
          },
        });
      });
  }, [settings, dispatch]);

  // Check if it is the last question. If it is - set finish state.
  // Else - prepare new question
  useEffect(() => {
    if (!questions || questions.length <= 0) return;

    // Utility function to shuffle answers to avoid
    // predictable position of the corrent answer
    const getCurrentQuestionData = (originalData) => {
      const { correct_answer, incorrect_answers, question } = originalData;
      const choices = shuffle([correct_answer, ...incorrect_answers]);
      return { question, choices, correct_answer };
    };

    if (questionIndex === questions.length) {
      dispatch({
        type: "FINISH_QUIZ",
      });
    } else {
      const newQuestion = getCurrentQuestionData(questions[questionIndex]);
      setCurrentQuestion(newQuestion);
    }
  }, [questions, questionIndex, dispatch]);

  const handleAnswerChoice = (choice) => {
    setChosenAnswer(choice);
  };

  const handleNextQuestion = () => {
    dispatch({
      type: "CONFIRM_ANSWER",
      payload: {
        question: {
          ...currentQuestion,
          answer: chosenAnswer,
          correct: chosenAnswer === currentQuestion.correct_answer,
        },
      },
    });
    setChosenAnswer(null);
  };

  if (!currentQuestion) return null;

  const { question, choices } = currentQuestion;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-header">
        Question #{questionIndex + 1} out of {totalQuestions}
      </div>
      <Question
        question={question}
        choices={choices}
        chosen={chosenAnswer}
        handleChoice={handleAnswerChoice}
      />
      <div className="quiz-footer">
        <Button disabled={!chosenAnswer} onClick={handleNextQuestion}>
          Next
        </Button>
      </div>
    </div>
  );
}
