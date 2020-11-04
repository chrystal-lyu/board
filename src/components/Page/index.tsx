import React from "react";
import { useSelector } from "react-redux";
import { PageBox } from "./index.style";
import { OwnProps } from "./types";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";
import { RootState } from "../../store/reducers/rootReducer";

const Page: React.FC<OwnProps> = (props) => {
  const [isShowing, show, hide] = useEditor();
  const { page } = useSelector((state: RootState) => state.app);
  return (
    <PageBox p={2} width={page.width} onClick={show}>
      <h1>Page</h1>
      {props.children}
      <Editor
        title="Page"
        isShowing={isShowing}
        hide={hide}
        width={props.width}
      />
    </PageBox>
  );
};

export default Page;
