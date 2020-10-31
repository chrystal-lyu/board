import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Board from "./components/Board";

const App = () => (
  <div>
    <CssBaseline />
    <Board />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
