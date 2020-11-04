import React from "react";
import { Box } from "@material-ui/core";
import { ContainerBox } from "./index.style";
import Text from "../Text";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";
import useHover from "../../hooks/useHover";
import { selectorBoxClass } from "../../utils";

const Container: React.FC = (props) => {
  const [isShowing, show, hide] = useEditor();
  const [hovered, addHover, removeHover] = useHover();

  return (
    <ContainerBox
      p={2}
      onClick={show}
      className={selectorBoxClass(isShowing, hovered)}
      onMouseOver={addHover}
      onMouseOut={removeHover}
    >
      <Box onMouseOver={removeHover} onMouseLeave={addHover}>
        <Text content="Container" fontSize={28} fontWeight={600} />
        {props.children}
      </Box>
      <Editor title="Container" isShowing={isShowing} hide={hide} />
    </ContainerBox>
  );
};

export default Container;
