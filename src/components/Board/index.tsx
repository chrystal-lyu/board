import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { OwnProps } from "./types";
import SideBar from "../SideBar";
import { RootState } from "../../store/reducers/rootReducer";

const defaultProps: OwnProps = {
  title: "My React and TypeScript App",
  backgroundColor: "papaya",
};

const Board: React.FC<OwnProps> = () => {
  const { title, backgroundColor } = useSelector(
    (state: RootState) => state.board
  );
  return (
    <Box p={2} style={{ backgroundColor: backgroundColor }}>
      <h1>{title}</h1>
      <SideBar />
    </Box>
  );
};

Board.defaultProps = defaultProps;

export default Board;
