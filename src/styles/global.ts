import styled from "styled-components";
import { Box } from "@material-ui/core";

export const SelectorBox = styled(Box)`
  border: 5px solid green;
  &:hover {
    cursor: pointer;
    border: 5px solid red;
  }
`