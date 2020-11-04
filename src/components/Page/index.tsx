import React from "react";
import { PageBox } from "./index.style";
import { OwnProps } from "./types";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";

const Page: React.FC<OwnProps> = (props) => {
  const [isShowing, show, hide] = useEditor();
  return (
    <PageBox p={2} width={props.width} onClick={show}>
      <h1>Page</h1>
      {props.children}
      <Editor title="Page" isShowing={isShowing} hide={hide} />
    </PageBox>
  );
};

export default Page;
