import React from "react";
import ReactDOM from "react-dom";
import { Box, Button, SwipeableDrawer } from "@material-ui/core";
import { OwnProps } from "./types";

const Editor: React.FC<OwnProps> = ({ isShowing, title, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <SwipeableDrawer
            anchor="right"
            open={isShowing}
            onClose={() => hide}
            onOpen={() => hide}
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
          </SwipeableDrawer>
        </React.Fragment>,
        document.body
      )
    : null;

export default Editor;
