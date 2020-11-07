import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField } from "@material-ui/core";
import { SketchPicker } from "react-color";
import { OwnProps } from "./types";
import { changeMainBg } from "../../../store/actions";

const ColorPicker: React.FC<OwnProps> = (props) => {
  const dispatch = useDispatch();
  const [showColorSwatch, setShowColorSwatch] = useState(false);
  return (
    <Box>
      <TextField
        fullWidth
        label="Background Color"
        variant="outlined"
        value={props.value}
        onChange={props.handleChange}
        onFocus={() => setShowColorSwatch(true)}
      />
      {showColorSwatch && (
        <SketchPicker
          color={props.value}
          onChange={(color) => dispatch(changeMainBg(color.hex))}
          onChangeComplete={() => setShowColorSwatch(false)}
        />
      )}
    </Box>
  );
};

export default ColorPicker;
