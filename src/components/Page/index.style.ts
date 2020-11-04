import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const PageBox = styled(SelectorBox)`
  width: ${(props) => props.width}px;
  margin: 0 auto;

  &.hover::before {
    content: "page";
    text-transform: uppercase;
    color: #33ada9;
    font-size: 0.5rem;
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;
