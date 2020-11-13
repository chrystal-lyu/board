import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const ImageContainer = styled(SelectorBox)`
  position: relative;
  max-width: 100%;
  display: block;

  &.hover::before {
    content: "image";
    text-transform: uppercase;
    color: #33ada9;
    font-size: 0.5rem;
    position: absolute;
    top: -15px;
    left: 0;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  border: dashed 2px rgba(164, 165, 173, 0.875);
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 100%;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
`;
