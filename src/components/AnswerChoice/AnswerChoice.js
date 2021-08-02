import classNames from "classnames";

import "./AnswerChoice.css";

export default function AnswerChoice({ children, handleChoice, isActive }) {
  let classnames = classNames({
    "answer-choice": true,
    "answer-choice--active": isActive,
  });

  return (
    <button className={classnames} onClick={handleChoice}>
      {children}
    </button>
  );
}
