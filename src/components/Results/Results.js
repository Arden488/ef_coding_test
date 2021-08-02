import { useEffect, useState } from "react";

import Button from "../Button/Button";
import TotalScore from "../TotalScore/TotalScore";
import AnswerResultList from "../AnswerResultList/AnswerResultList";

import "./Results.css";

export default function Results({ results, handleReset }) {
  const [correct, setCorrect] = useState(0);

  // TODO: keep effect or calculate once?
  useEffect(() => {
    let correct = 0;

    results.forEach((question) => {
      if (question.correct) correct++;
    });

    setCorrect(correct);
  }, [results]);

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
