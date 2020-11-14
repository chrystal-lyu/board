import React from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { TextBox } from "./index.style";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";
import useHover from "../../hooks/useHover";
import { selectorBoxClass } from "../../utils";
import { OwnProps } from "./types";
import { TextWrapper } from "./index.style";
import {
  setComponentId,
  setContainerId,
} from "../../store/actions/edit.action";

const Text: React.FC<OwnProps> = (props) => {
  const dispatch = useDispatch();
  const [isShowing, show, hide] = useEditor();
  const [hovered, addHover, removeHover] = useHover();
  const theme = {
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    letterSpacing: props.letterSpacing,
    textAlign: props.textAlign,
  };
  const handleClick = (e: React.MouseEvent) => {
    show(e);
    dispatch(setContainerId(props.parentId));
    dispatch(setComponentId(props.id));
  };

  return (
    <TextBox
      p={2}
      onClick={handleClick}
      className={selectorBoxClass(isShowing, hovered)}
      onMouseOver={addHover}
      onMouseOut={removeHover}
    >
      <ThemeProvider theme={theme}>
        <TextWrapper color={props.color}>{props.content}</TextWrapper>
      </ThemeProvider>
      <Editor
        title="Text"
        isShowing={isShowing}
        hide={hide}
        textContent={props.content}
        textSize={props.fontSize}
        containerId={props.parentId}
      />
    </TextBox>
  );
};

export default Text;
