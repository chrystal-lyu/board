import styled from "styled-components";
import { Box } from "@material-ui/core";

interface Props {
  url?: string;
}

export const UploadButton = styled.div`
  position: absolute;
  left: 40%;
  top: 40%;
`;

export const UploadContainer = styled(Box)`
  background-color: #000;
  border-radius: 6px;
  overflow: hidden;
  height: 12em;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-image: ${(props: Props) => (props.url ? `url(${props.url})` : "")};
`;
