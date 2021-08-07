import { memo } from "react";
import classNames from "classnames";

import "./AnswerChoice.css";

function AnswerChoice({ children, handleChoice, isActive }) {
  let classnames = classNames({
    "answer-choice": true,
    "answer-choice--active": isActive,
  });

  const onClick = (e) => {
    handleChoice(e.target.textContent);
  };

  return (
    <button className={classnames} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(AnswerChoice);
