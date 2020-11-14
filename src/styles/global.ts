import styled from "styled-components";
import { Box } from "@material-ui/core";

export const SelectorBox = styled(Box)`
  cursor: pointer;
  position: relative;
  border: 1px dotted transparent;

  &.hover {
    border: 1px dotted #33ada9;
  }

  &.active {
    border: 2px solid #33ada9;
  }
`;
