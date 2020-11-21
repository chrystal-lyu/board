import React from "react";
import { OwnProps } from "./types";
import { Wrapper } from "./index.style";
import Container from "../Container";

const EmptyContainer: React.FC<OwnProps> = (props) => {
  return (
    <Container id={props.id}>
      <Wrapper>Empty</Wrapper>
    </Container>
  );
};

export default EmptyContainer;
