import React from "react";
import { SelectorBox } from "../../styles/global";
import { OwnProps } from "./types";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";

const Page: React.FC<OwnProps> = (props) => {
  const [isShowing, toggle] = useEditor();
  return (
    <SelectorBox p={2} onClick={toggle}>
      <h1>Page</h1>
      {props.children}
      <Editor title="Page" isShowing={isShowing} hide={toggle}/>
    </SelectorBox>
  );
};

export default Page;
