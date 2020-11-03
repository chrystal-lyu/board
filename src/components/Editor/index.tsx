import React from "react";
import { Box, Button, Drawer, TextField } from "@material-ui/core";
import { OwnProps } from "./types";

const Editor: React.FC<OwnProps> = ({
  isShowing,
  title,
  hide,
  textContent,
}) => {
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={isShowing}
        onClose={hide}
        BackdropProps={{ invisible: true }}
      >
        <Box m={2}>
          <h1>{title}</h1>
          <Box>
            {textContent && (
              <TextField
                fullWidth
                value={textContent}
                label="Content"
                variant="outlined"
              />
            )}
          </Box>
        </Box>
        <Box mx={2}>
          <Button
            fullWidth={true}
            color="primary"
            variant="contained"
            onClick={hide}
          >
            DONE
          </Button>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Editor;
