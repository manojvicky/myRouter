import React from "react";
import ReactDOM from "react-dom";
import Router from "./Components/Router/Router";
import App1 from "./Components/App/App";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <App1 />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
