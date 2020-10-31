import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";

const App = () => (
  <div>
    <Board />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
