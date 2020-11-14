import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { RootState } from "../../store/reducers/rootReducer";
import { Component as ComponentType } from "../../store/actions/app.types";
import Background from "../Background";
import Page from "../Page";
import Container from "../Container";
import Text from "../Text";
import Image from "../Image";

const App: React.FC = () => {
  const { app } = useSelector((state: RootState) => state);
  return (
    <Box height="100vh">
      <CssBaseline />
      <Background>
        <Page width={app.page.width}>
          {app.page.containers?.map((container) => {
            if (
              container.type === "container" &&
              (container as ComponentType).components
            ) {
              return (
                <Container
                  key={container.id}
                  id={container.id}
                  backgroundColor={container.backgroundColor}
                  borderRadius={container.borderRadius}
                  dropShadow={container.dropShadow}
                >
                  {(container as ComponentType).components?.map((component) => {
                    switch (component.type) {
                      case "text":
                        return (
                          <Text
                            key={component.id}
                            id={component.id}
                            parentId={container.id}
                            content={component.content}
                            color={component.color}
                            fontSize={component.fontSize}
                            fontWeight={component.fontWeight}
                          />
                        );
                      case "image":
                        return (
                          <Image
                            id={component.id}
                            parentId={container.id}
                            key={component.id}
                            url={component.url}
                            shape={component.shape}
                            scale={component.scale}
                            crop={component.crop}
                          />
                        );
                      default:
                        return null;
                    }
                  })}
                </Container>
              );
            } else if (container.type === "text") {
              return (
                <Text
                  key={container.id}
                  id={null}
                  parentId={container.id}
                  content={container.content}
                  color={container.color}
                  fontSize={container.fontSize}
                  fontWeight={container.fontWeight}
                />
              );
            } else if (container.type === "image") {
              return (
                <Image
                  key={container.id}
                  id={null}
                  parentId={container.id}
                  url={container.url}
                  shape={container.shape}
                  scale={container.scale}
                  crop={container.crop}
                />
              );
            }
          })}
        </Page>
      </Background>
    </Box>
  );
};

export default App;
