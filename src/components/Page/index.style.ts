import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const PageBox = styled(SelectorBox)`
  width: ${(props) => props.width}px;
  margin: 0 auto;
`;
