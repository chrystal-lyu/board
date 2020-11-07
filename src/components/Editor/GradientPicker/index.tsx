import React from "react";
import { Box, TextField, Slider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { OwnProps } from "./types";

const GradientPicker: React.FC<OwnProps> = (props) => {
  return (
    <Box>
      <Box mt={2}>
        <TextField
          fullWidth
          label="Color Stop #1"
          variant="outlined"
          value={props.colorStop1}
          onChange={props.handleChangeColorStop1}
        />
      </Box>
      <Box mt={2}>
        <Typography id="continuous-slider-1" align="right">
          {props.stopPosition1}%
        </Typography>
        <Slider
          defaultValue={props.stopPosition1}
          aria-labelledby="continuous-slider-1"
          min={0}
          max={100}
          step={1}
          valueLabelDisplay="auto"
          onChange={(e, newValue) => props.handleChangeStopPosition1(newValue)}
        />
      </Box>
      <Box mt={2}>
        <TextField
          fullWidth
          label="Color Stop #2"
          variant="outlined"
          value={props.colorStop2}
          onChange={props.handleChangeColorStop2}
        />
      </Box>
      <Box mt={2}>
        <Typography id="continuous-slider-2" align="right">
          {props.stopPosition2}%
        </Typography>
        <Slider
          defaultValue={props.stopPosition2}
          aria-labelledby="continuous-slider-2"
          min={0}
          max={100}
          step={1}
          valueLabelDisplay="auto"
          onChange={(e, newValue) => props.handleChangeStopPosition2(newValue)}
        />
      </Box>
    </Box>
  );
};

export default GradientPicker;
