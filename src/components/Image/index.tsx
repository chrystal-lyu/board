import React from "react";
import { OwnProps } from "./types";
import { ImageContainer, Img } from "./index.style";

const Image: React.FC<OwnProps> = (props) => {
  return (
    <ImageContainer>
      <Img src={props.src} />
    </ImageContainer>
  );
};

export default Image;
