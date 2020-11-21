import styled from "styled-components";
import { Box } from "@material-ui/core";

interface Props {
  url?: string;
}

export const UploadButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const UploadContainer = styled(Box)`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  height: 12em;
  background-size: cover;
  background-position: center center;
  background-image: ${(props: Props) => (props.url ? `url(${props.url})` : "")};

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props: Props) =>
      props.url ? "rgba(36, 37, 45, 0.5)" : "rgba(36, 37, 45, 0.2)"};
    border-radius: inherit;
  }
`;
