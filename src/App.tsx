import { Fragment, useContext } from "react";

import { AppContext } from "./AppContext";
import { DataProvider } from "./DataContext";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import Quiz from "./components/Quiz/Quiz";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import CustomError from "./components/CustomError/CustomError";

import "./App.css";

function App() {
  const { state } = useContext(AppContext);
  const { quizStatus, isLoading, isError } = state;

  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <ErrorBoundary>
          {isError && <CustomError />}
          {isLoading && <Loader />}

          {!isError && (
            <Fragment>
              {quizStatus === "NOT_STARTED" && <Home />}
              <DataProvider>
                {quizStatus === "STARTED" && <Quiz />}
                {quizStatus === "FINISHED" && <Results />}
              </DataProvider>
            </Fragment>
          )}
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

export default App;
