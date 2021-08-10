import AnswerResult from "../AnswerResult/AnswerResult";

export default function AnswerResultList({ questions }) {
  if (!questions) return <p>Sorry, no results are recorded...</p>;

  return (
    <div>
      {questions.map((item) => {
        return <AnswerResult key={item.question} data={item} />;
      })}
    </div>
  );
}
