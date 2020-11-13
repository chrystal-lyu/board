import React from "react";
import { OwnProps } from "./types";
import useEditor from "../../hooks/useEditor";
import useHover from "../../hooks/useHover";
import Editor from "../Editor";
import { selectorBoxClass } from "../../utils";
import { ImageContainer, Img } from "./index.style";

const Image: React.FC<OwnProps> = (props) => {
  const [isShowing, show, hide] = useEditor();
  const [hovered, addHover, removeHover] = useHover();
  return (
    <ImageContainer
      onClick={show}
      className={selectorBoxClass(isShowing, hovered)}
      onMouseOver={addHover}
      onMouseOut={removeHover}
    >
      <Img src={props.url} />
      <Editor
        title="Image"
        isShowing={isShowing}
        hide={hide}
        imageUrl={props.url}
      />
    </ImageContainer>
  );
};

export default Image;
