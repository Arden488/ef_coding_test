import { ChangeEvent, useContext, useState } from "react";

import { AppContext } from "../../AppContext";
import categories from "../../categories";

import Button from "../Button/Button";
import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";
import FormControl from "../FormControl/FormControl";

import "./Home.css";

export default function Home() {
  const { dispatch } = useContext(AppContext);

  const [numQuestions, setNumQuestions] = useState(10);
  const [category, setCategory] = useState(32);
  const [numberError, setNumberError] = useState<string | null>(null);

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberError(null);

    let value = +e.target.value;
    if (isNaN(value) || !value || value < 1 || value > 99) {
      setNumberError("Number of questions must be between 1 and 99");
    }

    setNumQuestions(value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(+e.target.value);
  };

  const onStart = () => {
    dispatch({
      type: "START_QUIZ",
      payload: { settings: { num: numQuestions, category } },
    });
  };

  return (
    <div className="home-screen">
      <div className="home-screen-controls">
        <FormControl label="Number of questions" error={numberError || ""}>
          <TextInput
            name="num"
            type="number"
            size={3}
            value={numQuestions}
            onChange={handleNumberChange}
          />
        </FormControl>
        <FormControl label="Select category">
          <Select
            name="category"
            value={category}
            options={categories}
            onChange={handleCategoryChange}
          />
        </FormControl>
      </div>
      <p className="home-screen-intro">
        Click "Start" button to begin a new quiz
      </p>
      <Button variant="large" disabled={!!numberError} onClick={onStart}>
        Start
      </Button>
    </div>
  );
}
