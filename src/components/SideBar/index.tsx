import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  TextField,
  Button,
  SwipeableDrawer,
} from "@material-ui/core";
import { RootState } from "../../store/reducers/rootReducer";
import { changeTitle, changeBgColor } from "../../store/actions";

const SideBar: React.FC = () => {
  const { title, backgroundColor } = useSelector(
    (state: RootState) => state.board
  );
  const dispatch = useDispatch();
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
              <TextField
                fullWidth
                value={title}
                label="Title"
                variant="outlined"
                onChange={(e) => dispatch(changeTitle(e.target.value))}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                value={backgroundColor}
                label="Background Color"
                variant="outlined"
                onChange={(e) => dispatch(changeBgColor(e.target.value))}
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
