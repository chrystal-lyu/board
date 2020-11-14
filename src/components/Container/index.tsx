import React from "react";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import { ContainerBox, ContainerWrapper } from "./index.style";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";
import useHover from "../../hooks/useHover";
import { selectorBoxClass } from "../../utils";
import { OwnProps } from "./types";
import { setContainerId } from "../../store/actions/edit.action";

const Container: React.FC<OwnProps> = (props) => {
  const dispatch = useDispatch();
  const [isShowing, show, hide] = useEditor();
  const [hovered, addHover, removeHover] = useHover();
  const handleClick = (e: React.MouseEvent) => {
    show(e);
    dispatch(setContainerId(props.id));
  };

  return (
    <ContainerBox
      py={2}
      onClick={handleClick}
      className={selectorBoxClass(isShowing, hovered)}
      onMouseOver={addHover}
      onMouseOut={removeHover}
    >
      <ContainerWrapper backgroundColor={props.backgroundColor}>
        <Box onMouseOver={removeHover} onMouseLeave={addHover}>
          {props.children}
        </Box>
      </ContainerWrapper>
      <Editor
        title="Container"
        isShowing={isShowing}
        hide={hide}
        containerId={props.id}
      />
    </ContainerBox>
  );
};

export default Container;
