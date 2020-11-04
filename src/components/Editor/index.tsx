import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Drawer, TextField, Grid } from "@material-ui/core";
import { BlockPicker } from "react-color";
import { OwnProps } from "./types";
import { changeMainBg } from "../../store/actions";

const Editor: React.FC<OwnProps> = ({
  isShowing,
  title,
  hide,
  textContent,
  backgroundColor,
}) => {
  const dispatch = useDispatch();
  const [showColorSwatch, setShowColorSwatch] = useState(false);
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
                  onChange={(e) => dispatch(changeMainBg(e.target.value))}
                  onClick={() => setShowColorSwatch(true)}
                />
              )}
            </Grid>
          </Grid>
        </Box>
        <Box mx={2}>
          {showColorSwatch && (
            <BlockPicker
              color={backgroundColor}
              onChange={(color) => dispatch(changeMainBg(color.hex))}
            />
          )}
          <Button
            fullWidth={true}
            color="primary"
            variant="contained"
            onClick={(e) => {
              hide(e);
              setShowColorSwatch(false);
            }}
          >
            DONE
          </Button>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Editor;
