import React from "react";
import { useDispatch } from "react-redux";
import { OwnProps } from "./types";
import useEditor from "../../hooks/useEditor";
import useHover from "../../hooks/useHover";
import Editor from "../Editor";
import Component from "../Component";
import { selectorBoxClass } from "../../utils";
import { ImageContainer, Img } from "./index.style";
import {
  setComponentId,
  setContainerId,
} from "../../store/actions/edit.action";

const Image: React.FC<OwnProps> = (props) => {
  const dispatch = useDispatch();
  const [isShowing, show, hide] = useEditor();
  const [hovered, addHover, removeHover] = useHover();

  const handleClick = (e: React.MouseEvent) => {
    show(e);
    dispatch(setContainerId(props.parentId));
    dispatch(setComponentId(props.id));
  };

  return (
    <Component index={props.id as number}>
      <ImageContainer
        onClick={handleClick}
        className={selectorBoxClass(isShowing, hovered)}
        onMouseOver={addHover}
        onMouseOut={removeHover}
      >
        <Img src={props.url} shape={props.shape} />
        <Editor
          title="Image"
          isShowing={isShowing}
          hide={hide}
          imageUrl={props.url}
          imageShape={props.shape}
          containerId={props.parentId}
        />
      </ImageContainer>
    </Component>
  );
};

export default Image;
