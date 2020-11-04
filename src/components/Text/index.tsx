import React from "react";
import { ThemeProvider } from "styled-components";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";
import { OwnProps } from "./types";
import { SelectorBox } from "../../styles/global";
import { TextWrapper } from "./index.style";

const Text: React.FC<OwnProps> = (props) => {
  const [isShowing, show, hide] = useEditor();
  const theme = {
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    letterSpacing: props.letterSpacing,
    textAlign: props.textAlign,
  };
  return (
    <SelectorBox p={2} onClick={show} className={isShowing ? "active" : ""}>
      <ThemeProvider theme={theme}>
        <TextWrapper color={props.color}>{props.content}</TextWrapper>
      </ThemeProvider>
      <Editor
        title="Text"
        isShowing={isShowing}
        hide={hide}
        textContent={props.content}
      />
    </SelectorBox>
  );
};

export default Text;
