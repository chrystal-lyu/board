import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const PageBox = styled(SelectorBox)`
  width: ${(props) => props.width}px;
  padding: 5rem 3rem;
  margin: 0 auto;
  text-align: center;

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
