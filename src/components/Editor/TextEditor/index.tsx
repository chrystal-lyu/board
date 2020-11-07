import React, { useState } from "react";
import { Box, TextField, Slider, Select } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { SketchPicker } from "react-color";
import { OwnProps } from "./types";

const TextEditor: React.FC<OwnProps> = (props) => {
  const [showColorSwatch, setShowColorSwatch] = useState(false);
  return (
    <Box>
      <Box my={4}>
        <Typography variant="h6" id="text-content" gutterBottom>
          Content
        </Typography>
        <Box my={3} aria-labelledby="text-content">
          <TextField
            fullWidth
            value={props.content}
            label="Content"
            variant="standard"
          />
        </Box>
      </Box>
      <Box my={4}>
        <Typography variant="h6" id="text-appearance" gutterBottom>
          Appearance
        </Typography>
        <Box aria-labelledby="text-appearance">
          <Box my={3}>
            <Typography variant="subtitle2" id="text-appearance" gutterBottom>
              Color
            </Typography>
            <TextField
              fullWidth
              label="Background Color"
              variant="standard"
              value=""
              onFocus={() => setShowColorSwatch(true)}
            />
            {showColorSwatch && (
              <SketchPicker
                color=""
                onChangeComplete={() => setShowColorSwatch(false)}
              />
            )}
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="font-slider" gutterBottom>
              Font
            </Typography>
            <Box>
              <Select native value="arial" style={{ display: "block" }}>
                <option value="arial">Arial</option>
                <option value="georgia">Georgia</option>
              </Select>
            </Box>
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Size
            </Typography>
            <Slider
              defaultValue={600}
              aria-labelledby="size-slider"
              min={300}
              max={1200}
              step={50}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Weight
            </Typography>
            <Slider
              defaultValue={600}
              aria-labelledby="size-slider"
              min={300}
              max={1200}
              step={50}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Line Height
            </Typography>
            <Slider
              defaultValue={600}
              aria-labelledby="size-slider"
              min={300}
              max={1200}
              step={50}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Letter Spacing
            </Typography>
            <Slider
              defaultValue={600}
              aria-labelledby="size-slider"
              min={300}
              max={1200}
              step={50}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Margin
            </Typography>
            <Slider
              defaultValue={600}
              aria-labelledby="size-slider"
              min={300}
              max={1200}
              step={50}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="font-slider" gutterBottom>
              Case Appearance
            </Typography>
            <Box>
              <Select native value="normal" style={{ display: "block" }}>
                <option value="normal">Normal</option>
                <option value="lowercase">Lowercase</option>
                <option value="uppercase">Uppercase</option>
                <option value="smallcaps">Small Caps</option>
              </Select>
            </Box>
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="font-slider" gutterBottom>
              Alignment
            </Typography>
            <Box>
              <Select native value="auto" style={{ display: "block" }}>
                <option value="auto">Auto</option>
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TextEditor;
