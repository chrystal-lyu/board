import styled from "styled-components";
import { Box } from "@material-ui/core";

export const Wrapper = styled(Box)`
  background-color: rgba(144, 145, 153, 0.125);
  border: dashed 1px rgba(144, 145, 153, 0.5);
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  min-height: 5em;
`;
