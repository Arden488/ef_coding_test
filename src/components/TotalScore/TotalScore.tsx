import "./TotalScore.css";

interface Props {
  correct: number;
  total: number;
}

export default function TotalScore({ correct, total }: Props) {
  return (
    <h3 className="total-score">
      Thank you for taking our quiz!
      <br />
      Your result: {correct} / {total}
    </h3>
  );
}
