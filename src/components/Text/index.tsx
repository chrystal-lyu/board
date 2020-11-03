import React from "react";
import styled from "styled-components";
import { SelectorBox } from "../../styles/global";
import { OwnProps } from "./types";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";

const Text: React.FC<OwnProps> = (props) => {
  const TextWrapper = styled.div`
    color: ${props.color};
    font-size: ${props.fontSize}px;
    font-weight: ${props.fontWeight};
    letter-spacing: ${props.letterSpacing};
    text-align: ${props.textAlign};
  `;
  const [isShowing, show, hide] = useEditor();
  return (
    <SelectorBox p={2} onClick={show}>
      <TextWrapper>{props.content}</TextWrapper>
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
