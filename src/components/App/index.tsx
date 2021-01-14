import React from "react";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { RootState } from "../../store/reducers/rootReducer";
import { Component as ComponentType } from "../../store/actions/app.types";
import Background from "../Background";
import Page from "../Page";
import Container from "../Container";
import EmptyContainer from "../EmptyContainer";
import Text from "../Text";
import Image from "../Image";
import DraggableComponent from "../DraggableComponent";

const App: React.FC = () => {
  const { app } = useSelector((state: RootState) => state);
  return (
    <DndProvider backend={HTML5Backend}>
      <Box height="100vh">
        <CssBaseline />
        <Background>
          <Page width={app.page.width}>
            {app.page.containers?.map((container) => {
              if (
                container.type === "container" &&
                (container as ComponentType).components?.length === 0
              )
                return <EmptyContainer key={container.id} id={container.id} />;
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
                    {(container as ComponentType).components?.map(
                      (component, index) => {
                        switch (component.type) {
                          case "text":
                            return (
                              <DraggableComponent
                                key={index}
                                id={index}
                                index={index}
                                containerId={container.id}
                              >
                                <Text
                                  key={component.id}
                                  id={component.id}
                                  parentId={container.id}
                                  content={component.content}
                                  color={component.color}
                                  fontFamily={component.fontFamily}
                                  fontSize={component.fontSize}
                                  fontWeight={component.fontWeight}
                                  lineHeight={component.lineHeight}
                                  letterSpacing={component.letterSpacing}
                                  margin={component.margin}
                                  textTransform={component.textTransform}
                                  textAlign={component.textAlign}
                                />
                              </DraggableComponent>
                            );
                          case "image":
                            return (
                              <DraggableComponent
                                key={index}
                                id={index}
                                index={index}
                                containerId={container.id}
                              >
                                <Image
                                  id={component.id}
                                  parentId={container.id}
                                  key={component.id}
                                  url={component.url}
                                  shape={component.shape}
                                  scale={component.scale}
                                  crop={component.crop}
                                />
                              </DraggableComponent>
                            );
                          default:
                            return null;
                        }
                      }
                    )}
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
                    fontFamily={container.fontFamily}
                    fontSize={container.fontSize}
                    fontWeight={container.fontWeight}
                    lineHeight={container.lineHeight}
                    letterSpacing={container.letterSpacing}
                    margin={container.margin}
                    textTransform={container.textTransform}
                    textAlign={container.textAlign}
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
    </DndProvider>
  );
};

export default App;
