import { useEffect, useState } from "react";

import TotalScore from "../TotalScore/TotalScore";
import AnswerResultList from "../AnswerResultList/AnswerResultList";

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
    </div>
  );
}
