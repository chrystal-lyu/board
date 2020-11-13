import React from "react";
import { useSelector } from "react-redux";
import { PageBox } from "./index.style";
import { Box } from "@material-ui/core";
import { OwnProps } from "./types";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";
import useHover from "../../hooks/useHover";
import { selectorBoxClass } from "../../utils";
import { RootState } from "../../store/reducers/rootReducer";

const Page: React.FC<OwnProps> = (props) => {
  const [isShowing, show, hide] = useEditor();
  const [hovered, addHover, removeHover] = useHover();
  const { page } = useSelector((state: RootState) => state.app);
  return (
    <PageBox
      p={2}
      width={page.width}
      onClick={show}
      className={selectorBoxClass(isShowing, hovered)}
      onMouseOver={addHover}
      onMouseOut={removeHover}
    >
      <Box onMouseOver={removeHover} onMouseLeave={addHover}>
        {props.children}
      </Box>
      <Editor title="Page" isShowing={isShowing} hide={hide} />
    </PageBox>
  );
};

export default Page;
