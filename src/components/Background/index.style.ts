import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const BackgroundBox = styled(SelectorBox)`
  background-color: ${(props) => props.theme.background};

  &.gradient {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20preserveAspectRatio%3D%22none%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220.96484375%200%200%200%200%200%200.52734375%200%200%200%200%200%200.38671875%200%200%200%200%200%200.66796875%200%22%20/%3E%3C/filter%3E%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20/%3E%3C/svg%3E"),
      ${(props) =>
        `linear-gradient(135deg, ${props.theme.colorStop1} ${props.theme.stopPosition1}%, ${props.theme.colorStop2} ${props.theme.stopPosition2}%)`};
  }
`;
