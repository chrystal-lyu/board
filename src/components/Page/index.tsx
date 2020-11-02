import React from "react";
import { SelectorBox } from "../../styles/global";
import { OwnProps } from "./types";
import SideBar from "../SideBar";

const Page: React.FC<OwnProps> = (props) => {
  return (
    <SelectorBox p={2} width={props.width}>
      <h1>Page</h1>
      {props.children}
      <SideBar title="Page" />
    </SelectorBox>
  );
};

export default Page;
