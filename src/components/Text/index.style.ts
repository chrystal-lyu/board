import styled from "styled-components";

export const TextWrapper = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.theme.fontSize}px;
  font-weight: ${(props) => props.theme.fontWeight};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  text-align: ${(props) => props.theme.textAlign};
`;
