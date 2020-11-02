import React from "react";
import { SelectorBox } from "../../styles/global";
import { OwnProps } from "./types";
import SideBar from "../SideBar";

const Background: React.FC<OwnProps> = (props) => {
  return (
    <SelectorBox p={2} height="100vh" onClick={() => console.log('clicked')}>
      <h1>Background</h1>
      {props.children}
      <SideBar title="Background" />
    </SelectorBox>
  );
};

export default Background;
