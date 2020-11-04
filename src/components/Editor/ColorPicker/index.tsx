import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { OwnProps } from "./types";

const ColorPicker: React.FC<OwnProps> = (props) => {
  return (
    <Grid item>
      <TextField
        fullWidth
        label="Background Color"
        variant="outlined"
        value={props.value}
        onChange={props.handleChange}
        onClick={props.handleClick}
      />
    </Grid>
  )
};

export default ColorPicker;
