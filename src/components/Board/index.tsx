import React from "react";
import { Box } from "@material-ui/core";
import { Props } from "./types";
import SideBar from "../SideBar";

const defaultProps: Props = {
  title: 'My React and TypeScript App',
  backgroundColor: 'lavender'
}

const Board: React.FC<Props> = ({ title, backgroundColor }) => {

  return (
    <Box p={2} style={{backgroundColor: backgroundColor}}>
      <h1>{title}</h1>
      <SideBar />
    </Box>
  );
};

Board.defaultProps = defaultProps;

export default Board;
