import { useEffect, useState } from "react";

export default function Quiz() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=32")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  if (!data) return "Loading...";
  return JSON.stringify(data, undefined, "  ");
}
