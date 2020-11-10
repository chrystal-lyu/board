import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const ContainerBox = styled(SelectorBox)`
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  &.hover::before {
    content: "container";
    text-transform: uppercase;
    color: #33ada9;
    font-size: 0.5rem;
    position: absolute;
    top: -15px;
    left: 0;
  }
`;
