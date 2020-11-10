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
      <Background>
        <Page width={sample.page.width}>
          {sample.page.components.map((component) => {
            if (component.type === "container") {
              return (
                <Container key={component.id} id={component.id}>
                  {component.components.map((comp) => {
                    switch (comp.type) {
                      case "text":
                        return (
                          <Text
                            key={comp.id}
                            id={comp.id}
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
