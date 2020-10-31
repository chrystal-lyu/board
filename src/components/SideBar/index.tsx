import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  SwipeableDrawer,
} from "@material-ui/core";

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
        START EDIT
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        BackdropProps={{ invisible: true }}
      >
        <Box m={2}>
          <h1>Menu</h1>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <TextField fullWidth label="Title" variant="outlined" />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Background Color"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
        <Box mx={2}>
          <Button
            fullWidth={true}
            color="primary"
            variant="contained"
            onClick={() => setOpen(false)}
          >
            DONE
          </Button>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default SideBar;
