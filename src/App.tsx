import { Fragment, useContext } from "react";

import { AppContext } from "./context";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import Quiz from "./components/Quiz/Quiz";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";

import "./App.css";

function App() {
  const { state } = useContext(AppContext);
  const { quizStatus, isLoading, isError } = state;

  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <ErrorBoundary>
          {isError && <Error />}
          {isLoading && <Loader />}

          {!isError && (
            <Fragment>
              {quizStatus === "NOT_STARTED" && <Home />}
              {quizStatus === "STARTED" && <Quiz />}
              {quizStatus === "FINISHED" && <Results />}
            </Fragment>
          )}
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

export default App;
