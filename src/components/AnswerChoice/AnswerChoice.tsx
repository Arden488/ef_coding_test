import classNames from "classnames";

import "./AnswerChoice.css";

type Props = {
  children?: React.ReactNode;
  handleChoice: () => void;
  isActive: boolean;
};

export default function AnswerChoice({
  children,
  handleChoice,
  isActive,
}: Props) {
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
