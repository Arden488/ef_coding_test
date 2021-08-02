import classNames from "classnames";
import { parseEntities } from "parse-entities";

import "./AnswerResult.css";

export default function AnswerResult({ data }) {
  const { correct, answer, question, correct_answer } = data;

  let classnames = classNames({
    "answer-result": true,
    "answer-result--correct": correct,
  });

  return (
    <div className={classnames}>
      <h4 className="answer-result__question">{parseEntities(question)}</h4>
      <p className="answer-result__yours">Your answer: {answer}</p>
      {correct && <p className="answer-result__explain">Correct!</p>}
      {!correct && (
        <p className="answer-result__explain">
          Sorry, the correct answer is: {correct_answer}
        </p>
      )}
    </div>
  );
}
