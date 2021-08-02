import { parseEntities } from "parse-entities";
import AnswerChoice from "../AnswerChoice/AnswerChoice";

import "./Question.css";

export default function Question({ question, choices, chosen, handleChoice }) {
  if (!question || !choices) return null;

  return (
    <div>
      <h4 className="question-text">{parseEntities(question)}</h4>
      <div className="question-choices">
        {choices.map((choice) => (
          <AnswerChoice
            isActive={choice === chosen}
            key={choice}
            handleChoice={() => handleChoice(choice)}
          >
            {parseEntities(choice)}
          </AnswerChoice>
        ))}
      </div>
    </div>
  );
}
