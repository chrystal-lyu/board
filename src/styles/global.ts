import styled from "styled-components";
import { Box } from "@material-ui/core";

export const SelectorBox = styled(Box)`
  background-color: ${(props) => props.theme.backgroundColor};
  cursor: pointer;
  border: 2px dotted green;

  &:hover {
    border: 2px dotted red;
  }

  &.active {
    border: 2px solid red;
  }
`;
