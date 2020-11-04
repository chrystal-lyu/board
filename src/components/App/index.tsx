import React from "react";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import sample from "../../sample.json";
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
        <Page width={sample.page.width}>
          {sample.page.components.map((component, i) => {
            if (component.type === "container") {
              return (
                <Container key={i}>
                  {component.components.map((comp, j) => {
                    switch (comp.type) {
                      case "text":
                        return (
                          <Text
                            key={j}
                            content={comp.content}
                            color={comp.color}
                            fontSize={comp.fontSize}
                            fontWeight={comp.fontWeight}
                          />
                        );
                      default:
                        return null;
                    }
                  })}
                </Container>
              );
            }
          })}
        </Page>
      </Background>
    </Box>
  );
};

export default App;
