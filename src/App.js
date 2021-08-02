import { useState } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [quizStatus, setQuizStatus] = useState("NOT_STARTED");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [settings, setSettings] = useState({
    num: 10,
    category: 32,
  });

  const handleQuizStart = (settings) => {
    setSettings(settings);
    setQuizStatus("STARTED");
  };

  const handleResults = (result) => {
    setResults([...results, result]);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleQuizFinished = () => {
    setQuizStatus("FINISHED");
  };

  return (
    <div className="app">
      <Header />
      <div className="app-main">
        {quizStatus === "NOT_STARTED" && <Home handleStart={handleQuizStart} />}
        {quizStatus === "STARTED" && (
          <Quiz
            settings={settings}
            questionIndex={questionIndex}
            handleFinished={handleQuizFinished}
            handleNext={handleResults}
          />
        )}
        {quizStatus === "FINISHED" && <Results results={results} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
