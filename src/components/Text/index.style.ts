import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const TextBox = styled(SelectorBox)`
  &.hover::before {
    content: "text";
    text-transform: uppercase;
    color: #33ada9;
    font-size: 0.5rem;
    position: absolute;
    top: -15px;
    left: 0;
  }
`;

export const TextWrapper = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.theme.fontSize}px;
  font-weight: ${(props) => props.theme.fontWeight};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  text-align: ${(props) => props.theme.textAlign};
`;
