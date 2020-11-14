import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import { SketchPicker } from "react-color";
import { OwnProps } from "./types";

const ColorPicker: React.FC<OwnProps> = (props) => {
  const { value, handleChange, handlePickerChange } = props;
  const [showColorSwatch, setShowColorSwatch] = useState(false);

  return (
    <Box>
      <TextField
        fullWidth
        label="Background Color"
        variant="outlined"
        value={value}
        onChange={handleChange}
        onFocus={() => setShowColorSwatch(true)}
      />
      {showColorSwatch && (
        <SketchPicker
          color={value}
          onChange={(color) => handlePickerChange(color.hex)}
          onChangeComplete={() => setShowColorSwatch(false)}
        />
      )}
    </Box>
  );
};

export default ColorPicker;
