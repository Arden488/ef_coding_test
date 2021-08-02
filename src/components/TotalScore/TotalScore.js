import "./TotalScore.css";

export default function TotalScore({ correct, total }) {
  return (
    <h3 className="total-score">
      Thank you for taking our quiz!
      <br />
      Your result: {correct} / {total}
    </h3>
  );
}
