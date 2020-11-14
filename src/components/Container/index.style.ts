import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

interface Props {
  backgroundColor?: string;
}

export const ContainerBox = styled(SelectorBox)`
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  &:first-child {
    margin-top: 20px;
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

export const ContainerWrapper = styled.div`
  border-radius: 1rem;
  background-color: ${(props: Props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
`;
