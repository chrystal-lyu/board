import React from "react";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Board from "../Board";
import Background from "../Background";
import Page from "../Page";

const App: React.FC = () => (
  <Box height="100vh">
    <CssBaseline />
    <Background>
      <Page>
        <button>button inside page</button>
      </Page>
    </Background>
    <Board />
  </Box>
);

export default App;
