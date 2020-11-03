import React from "react";
import { SelectorBox } from "../../styles/global";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";

const Container: React.FC = (props) => {
  const [isShowing, show, hide] = useEditor();
  return (
    <SelectorBox p={2} onClick={show}>
      <h1>Container</h1>
      {props.children}
      <Editor title="Container" isShowing={isShowing} hide={hide} />
    </SelectorBox>
  );
};

export default Container;
