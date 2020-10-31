import React from "react";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Board from "../Board";

const App: React.FC = () => (
  <Box height="100vh">
    <CssBaseline />
    <Board />
  </Box>
);

export default App;
