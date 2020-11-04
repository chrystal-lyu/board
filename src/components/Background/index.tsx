import React from "react";
import { ThemeProvider } from "styled-components";
import { BackgroundBox } from "./index.style";
import { OwnProps } from "./types";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";

const Background: React.FC<OwnProps> = (props) => {
  const [isShowing, show, hide] = useEditor();
  const theme = {
    background: props.background,
  };
  return (
    <ThemeProvider theme={theme}>
      <BackgroundBox p={2} height="100vh" onClick={show}>
        <h1>Background</h1>
        {props.children}
        <Editor title="Background" isShowing={isShowing} hide={hide} />
      </BackgroundBox>
    </ThemeProvider>
  );
};

export default Background;
