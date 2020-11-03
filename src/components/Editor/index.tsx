import React from "react";
import { Box, Button, Drawer } from "@material-ui/core";
import { OwnProps } from "./types";

const Editor: React.FC<OwnProps> = ({ isShowing, title, hide }) => {
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={isShowing}
        onClose={() => hide}
        BackdropProps={{ invisible: true }}
      >
        <Box m={2}>
          <h1>{title}</h1>
        </Box>
        <Button
          fullWidth={true}
          color="primary"
          variant="contained"
          onClick={hide}
        >
          DONE
        </Button>
      </Drawer>
    </React.Fragment>
  );
};

export default Editor;
