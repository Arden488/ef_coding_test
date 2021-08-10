import classNames from "classnames";
import { parseEntities } from "parse-entities";
import { Result } from "../../types";

import "./AnswerResult.css";

interface Props {
  data: Result;
}

export default function AnswerResult({ data }: Props) {
  const { correct, answer, question, correct_answer } = data;

  let classnames = classNames({
    "answer-result": true,
    "answer-result--correct": correct,
  });

  return (
    <div className={classnames}>
      <h4 className="answer-result__question">{parseEntities(question)}</h4>
      <p className="answer-result__yours">
        Your answer: {parseEntities(answer)}
      </p>
      {correct && <p className="answer-result__explain">Correct!</p>}
      {!correct && (
        <p className="answer-result__explain">
          Sorry, the correct answer is: {parseEntities(correct_answer)}
        </p>
      )}
    </div>
  );
}
