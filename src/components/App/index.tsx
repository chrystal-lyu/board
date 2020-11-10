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
          {sample.page.containers.map((container) => {
            if (container.type === "container") {
              return (
                <Container key={container.id} id={container.id}>
                  {container.components.map((component) => {
                    switch (component.type) {
                      case "text":
                        return (
                          <Text
                            key={component.id}
                            id={component.id}
                            content={component.content}
                            color={component.color}
                            fontSize={component.fontSize}
                            fontWeight={component.fontWeight}
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
