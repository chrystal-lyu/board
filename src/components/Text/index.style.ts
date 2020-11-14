import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const TextBox = styled(SelectorBox)`
  padding: 0;
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
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize}px;
  font-weight: ${(props) => props.theme.fontWeight};
  line-height: ${(props) => `${props.theme.lineHeight}px`};;
  letter-spacing: ${(props) => `${props.theme.letterSpacing}px`};
  margin: ${(props) => `${props.theme.margin}px 0`};
  text-transform: ${(props) => props.theme.textTransform};
  text-align: ${(props) => props.theme.textAlign};
`;
