import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Drawer,
  TextField,
  Grid,
  Slider,
} from "@material-ui/core";
import { BlockPicker } from "react-color";
import { OwnProps } from "./types";
import { RootState } from "../../store/reducers/rootReducer";
import { changeMainBg, changePageWidth } from "../../store/actions";

const Editor: React.FC<OwnProps> = ({
  isShowing,
  title,
  hide,
  textContent,
  backgroundColor,
  width,
}) => {
  const dispatch = useDispatch();
  const [showColorSwatch, setShowColorSwatch] = useState(false);
  const { page } = useSelector((state: RootState) => state.app);

  function valuetext(value: number) {
    return `${value}px`;
  }
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={isShowing}
        onClose={hide}
        BackdropProps={{ invisible: true }}
      >
        <Box m={2} width={200}>
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
            <Grid item>
              {width && (
                <Box width={200}>
                  <Slider
                    defaultValue={Number(page.width)}
                    getAriaValueText={valuetext}
                    aria-labelledby="continuous-slider"
                    min={300}
                    max={1200}
                    step={50}
                    valueLabelDisplay="auto"
                    onChange={(e, newValue) =>
                      dispatch(changePageWidth(newValue.toString()))
                    }
                  />
                </Box>
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
