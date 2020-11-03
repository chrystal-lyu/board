import React from "react";
import { SelectorBox } from "../../styles/global";
import { OwnProps } from "./types";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";

const Background: React.FC<OwnProps> = (props) => {
  const [isShowing, toggle] = useEditor();
  return (
    <SelectorBox p={2} height="100vh" onClick={toggle}>
      <h1>Background</h1>
      {props.children}
      <Editor title="Background" isShowing={isShowing} hide={toggle} />
    </SelectorBox>
  );
};

export default Background;
