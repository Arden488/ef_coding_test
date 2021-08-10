import { memo, useState, useMemo, useContext, useCallback } from "react";
import { parseEntities } from "parse-entities";
import AnswerChoice from "../AnswerChoice/AnswerChoice";

import { AppContext } from "../../AppContext";
import { DataContext } from "../../DataContext";

import Button from "../Button/Button";

import "./Question.css";

export default function Question({ question, choices }) {
  const { state: DataState, dispatch: DataDispatch } = useContext(DataContext);
  const { state: AppState, dispatch: AppDispatch } = useContext(AppContext);
  const [chosenAnswer, setChosenAnswer] = useState(null);

  const handleAnswerChoice = useCallback((choice) => {
    setChosenAnswer(choice);
  }, []);

  const handleNextQuestion = () => {
    DataDispatch({
      type: "CONFIRM_ANSWER",
      payload: {
        question: {
          ...question,
          answer: chosenAnswer,
          correct: chosenAnswer === question.correct_answer,
        },
      },
    });
    setChosenAnswer(null);
  };

  if (!question || !choices) return null;

  return (
    <div>
      <h4 className="question-text">{parseEntities(question)}</h4>
      <div className="question-choices">
        {choices.map((choice) => (
          <AnswerChoice
            isActive={choice === chosenAnswer}
            key={choice}
            handleChoice={handleAnswerChoice}
          >
            {parseEntities(choice)}
          </AnswerChoice>
        ))}
      </div>
      <div className="quiz-footer">
        <Button disabled={!chosenAnswer} onClick={handleNextQuestion}>
          Next
        </Button>
      </div>
    </div>
  );
}
