import { useState } from "react";

import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);

  const handleResults = (result) => {
    setResults([...results, result]);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleQuizFinished = () => {
    setIsQuizFinished(true);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-main">
        {!isQuizFinished && (
          <Quiz
            questionIndex={questionIndex}
            handleFinished={handleQuizFinished}
            handleNext={handleResults}
          />
        )}
        {isQuizFinished && <Results results={results} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
