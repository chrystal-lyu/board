import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BackgroundBox } from "./index.style";
import { OwnProps } from "./types";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";
import { RootState } from "../../store/reducers/rootReducer";

const Background: React.FC<OwnProps> = (props) => {
  const [isShowing, show, hide] = useEditor();
  const { background } = useSelector((state: RootState) => state.app);

  const theme = {
    background: background.style.config.color,
  };
  return (
    <ThemeProvider theme={theme}>
      <BackgroundBox p={2} height="100vh" onClick={show}>
        <h1>Background</h1>
        {props.children}
        <Editor
          title="Background"
          isShowing={isShowing}
          hide={hide}
          backgroundColor={background.style.config.color}
        />
      </BackgroundBox>
    </ThemeProvider>
  );
};

export default Background;
