import styled from "styled-components";
import { SelectorBox } from "../../styles/global";

export const BackgroundBox = styled(SelectorBox)`
  background-color: ${(props) => props.theme.background};
`;
