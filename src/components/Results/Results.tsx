import { useContext, useEffect, useState } from "react";

import { AppContext } from "../../AppContext";
import { DataContext } from "../../DataContext";

import Button from "../Button/Button";
import TotalScore from "../TotalScore/TotalScore";
import AnswerResultList from "../AnswerResultList/AnswerResultList";

import "./Results.css";

export default function Results() {
  const { state: DataState, dispatch: DataDispatch } = useContext(DataContext);
  const { dispatch: AppDispatch } = useContext(AppContext);

  const [correct, setCorrect] = useState(0);
  const { results } = DataState;

  useEffect(() => {
    let correct = 0;

    results.forEach((question) => {
      if (question.correct) correct++;
    });

    setCorrect(correct);
  }, [results]);

  const handleReset = () => {
    AppDispatch({ type: "RESET_QUIZ" });
    DataDispatch({ type: "RESET_QUIZ" });
  };

  if (!results) return null;

  return (
    <div>
      <TotalScore correct={correct} total={results.length} />
      <AnswerResultList questions={results} />
      <div className="results-footer">
        <p>Want to try again? Go back and start a new quiz!</p>
        <Button onClick={handleReset}>Back to home page</Button>
      </div>
    </div>
  );
}
