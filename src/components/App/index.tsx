import React from "react";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import sample from "../../sample.json";
import Board from "../Board";
import Background from "../Background";
import Page from "../Page";
import Container from "../Container";
import Text from "../Text";

const App: React.FC = () => {
  return (
    <Box height="100vh">
      <CssBaseline />
      <Background
        options={sample.background.style.options}
        background={sample.background.style.config.color}
      >
        <Page width={sample.page.width}></Page>
      </Background>
      <hr />
      <Background options="color">
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
};

export default App;
