import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

interface Props {
  shape?: string;
}

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
  border: ${(props) => (props.src ? "none" : `dashed 2px rgba(164, 165, 173, 0.875)`)};
  width: 6.5rem;
  height: 6.5rem;
  border-radius: ${(props: Props) => (props.shape === "circle" ? "100%" : "0")};
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
`;
