import React from "react";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Board from "../Board";
import Background from "../Background";
import Page from "../Page";
import Container from "../Container";
import Text from "../Text";

const App: React.FC = () => (
  <Box height="100vh">
    <CssBaseline />
    <Background>
      <Page>
        <Container>
          <Text
            color="#2ccce4"
            content="Jane Doe"
            fontSize={24}
            fontWeight={600}
          />
          <Text content="A Full Stack Developer" />
          <Text
            color="#ba68c8"
            content="Magna lorem enim sapien, blandit eu, ante orci luctus et ultrices posuere cubilia luctus elit eget interdum."
          />
        </Container>
      </Page>
    </Background>
    <Board />
  </Box>
);

export default App;
