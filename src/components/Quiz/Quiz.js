import { useEffect, useState } from "react";
import shuffle from "lodash/shuffle";

import Question from "../Question/Question";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import "./Quiz.css";

export default function Quiz({
  settings,
  questionIndex,
  handleFinished,
  handleNext,
}) {
  const [data, setData] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Fetch data
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${settings.num}&category=${settings.category}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result.results);
        setTotalQuestions(result.results.length);
      });
  }, [settings]);

  // Check if it is the last question. If it is - set finish state.
  // Else - prepare new question
  useEffect(() => {
    if (!data) return;

    // Utility function to shuffle answers to avoid
    // predictable position of the corrent answer
    const getCurrentQuestionData = (originalData) => {
      const { correct_answer, incorrect_answers, question } = originalData;
      const choices = shuffle([correct_answer, ...incorrect_answers]);
      return { question, choices, correct_answer };
    };

    if (questionIndex === data.length) {
      handleFinished();
    } else {
      const newQuestion = getCurrentQuestionData(data[questionIndex]);
      setCurrentQuestion(newQuestion);
    }
  }, [data, questionIndex, handleFinished]);

  const handleAnswerChoice = (choice) => {
    setChosenAnswer(choice);
  };

  const handleNextQuestion = () => {
    handleNext({
      ...currentQuestion,
      answer: chosenAnswer,
      correct: chosenAnswer === currentQuestion.correct_answer,
    });
    setChosenAnswer(null);
  };

  if (!data || !currentQuestion) return <Loader />;

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
