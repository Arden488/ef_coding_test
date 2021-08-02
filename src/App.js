import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <Quiz />
      </div>
      <Footer />
    </div>
  );
}

export default App;
