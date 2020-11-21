import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Slider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { SketchPicker } from "react-color";
import { OwnProps } from "./types";
import { changeColorStop1, changeColorStop2 } from "../../../store/actions";

const GradientPicker: React.FC<OwnProps> = (props) => {
  const dispatch = useDispatch();
  const [showColorSwatch, setShowColorSwatch] = useState({
    stop1: false,
    stop2: false,
  });
  return (
    <Box>
      <Box mt={2}>
        <TextField
          fullWidth
          label="Color Stop #1"
          variant="outlined"
          value={props.colorStop1}
          onFocus={() => setShowColorSwatch({ stop1: true, stop2: false })}
          onChange={props.handleChangeColorStop1}
        />
        {showColorSwatch.stop1 && (
          <SketchPicker
            color={props.colorStop1}
            onChange={(color) => dispatch(changeColorStop1(color.hex))}
            onChangeComplete={() =>
              setShowColorSwatch({ stop1: false, stop2: false })
            }
          />
        )}
      </Box>
      <Box mt={2}>
        <Typography id="continuous-slider-1" align="right">
          {props.stopPosition1}%
        </Typography>
        <Slider
          value={props.stopPosition1}
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
          onFocus={() => setShowColorSwatch({ stop1: false, stop2: true })}
          onChange={props.handleChangeColorStop2}
        />
        {showColorSwatch.stop2 && (
          <SketchPicker
            color={props.colorStop2}
            onChange={(color) => dispatch(changeColorStop2(color.hex))}
            onChangeComplete={() =>
              setShowColorSwatch({ stop1: false, stop2: false })
            }
          />
        )}
      </Box>
      <Box mt={2}>
        <Typography id="continuous-slider-2" align="right">
          {props.stopPosition2}%
        </Typography>
        <Slider
          value={props.stopPosition2}
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
