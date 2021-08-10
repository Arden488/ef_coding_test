import { ChangeEvent, memo, SyntheticEvent } from "react";
import classNames from "classnames";

import "./AnswerChoice.css";

interface Props {
  children?: React.ReactNode;
  handleChoice: () => void;
  isActive: boolean;
}

function AnswerChoice({ children, handleChoice, isActive }: Props) {
  let classnames = classNames({
    "answer-choice": true,
    "answer-choice--active": isActive,
  });

  const onClick = (e: SyntheticEvent) => {
    if (e.currentTarget) {
      handleChoice(e.currentTarget.textContent);
    }
  };

  return (
    <button className={classnames} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(AnswerChoice);
