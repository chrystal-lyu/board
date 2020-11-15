import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

interface Props {
  backgroundColor?: string;
  borderRadius?: number;
  padding?: number;
  marginY?: number;
  dropShadow?: boolean;
}

export const ContainerBox = styled(SelectorBox)`
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
  box-shadow: ${(props: Props) =>
    props.dropShadow
      ? "rgba(61, 31, 38, 0.35) 0rem 1rem 2.625rem 0rem;"
      : "none"};

  border-radius: ${(props: Props) =>
    (props.borderRadius !== undefined) ? `${props.borderRadius}px` : "16px"};

  background-color: ${(props: Props) =>
    props.backgroundColor ? props.backgroundColor : "none"};

  padding: ${(props: Props) => (props.padding ? props.padding : "16px")};

  margin: ${(props: Props) =>
    props.marginY ? `${props.marginY} 0` : "16px 0"};
`;
