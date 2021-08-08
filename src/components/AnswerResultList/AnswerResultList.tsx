import { Result } from "../../state";
import AnswerResult from "../AnswerResult/AnswerResult";

type Props = {
  questions: Result[];
};

export default function AnswerResultList({ questions }: Props) {
  if (!questions) return <p>Sorry, no results are recorded...</p>;

  return (
    <div>
      {questions.map((item) => {
        return <AnswerResult key={item.question} data={item} />;
      })}
    </div>
  );
}
