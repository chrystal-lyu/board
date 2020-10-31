import React from "react";
import { Box } from "@material-ui/core";
import SideBar from "../SideBar";

const Board: React.FC = () => {
  return (
    <Box p={2}>
      <h1>My React and TypeScript App!!</h1>
      <SideBar />
    </Box>
  );
};

export default Board;
