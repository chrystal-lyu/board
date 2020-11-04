import React from "react";
import { Box, Button, Drawer, TextField, Grid } from "@material-ui/core";
import { OwnProps } from "./types";

const Editor: React.FC<OwnProps> = ({
  isShowing,
  title,
  hide,
  textContent,
  backgroundColor,
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
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              {textContent && (
                <TextField
                  fullWidth
                  value={textContent}
                  label="Content"
                  variant="outlined"
                />
              )}
            </Grid>
            <Grid item>
              {backgroundColor && (
                <TextField
                  fullWidth
                  value={backgroundColor}
                  label="Background Color"
                  variant="outlined"
                />
              )}
            </Grid>
          </Grid>
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
