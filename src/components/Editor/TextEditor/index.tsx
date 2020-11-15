import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField, Slider, Select } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { SketchPicker } from "react-color";
import { OwnProps } from "./types";
import { changeTextContent, changeTextSize } from "../../../store/actions";
import { RootState } from "../../../store/reducers/rootReducer";

const TextEditor: React.FC<OwnProps> = (props) => {
  const dispatch = useDispatch();
  const [showColorSwatch, setShowColorSwatch] = useState(false);
  const { containerId, componentId } = useSelector(
    (state: RootState) => state.edit
  );

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
            onChange={(e) =>
              dispatch(
                changeTextContent(containerId, componentId, e.target.value)
              )
            }
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
              label="Color"
              variant="standard"
              value={props.color}
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
              <Select native value={props.font} style={{ display: "block" }}>
                <option value="arial">Arial</option>
                <option value="georgia">Georgia</option>
                <option value="georgia">Fantasy</option>
              </Select>
            </Box>
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Size
            </Typography>
            <Slider
              defaultValue={props.size}
              value={props.size}
              aria-labelledby="size-slider"
              min={8}
              max={48}
              step={2}
              valueLabelDisplay="auto"
              onChange={(e, newValue) => {
                dispatch(
                  changeTextSize(containerId, componentId, newValue as number)
                );
              }}
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Weight
            </Typography>
            <Slider
              value={props.weight}
              aria-labelledby="size-slider"
              min={300}
              max={600}
              step={50}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Line Height
            </Typography>
            <Slider
              value={props.height}
              aria-labelledby="size-slider"
              min={props.size}
              max={50}
              step={1}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Letter Spacing
            </Typography>
            <Slider
              value={props.spacing}
              aria-labelledby="size-slider"
              min={0}
              max={10}
              step={1}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Margin
            </Typography>
            <Slider
              value={props.margin}
              aria-labelledby="size-slider"
              min={0}
              max={20}
              step={1}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="font-slider" gutterBottom>
              Case Appearance
            </Typography>
            <Box>
              <Select
                native
                value={props.transform}
                style={{ display: "block" }}
              >
                <option value="unset">Unset</option>
                <option value="lowercase">Lowercase</option>
                <option value="uppercase">Uppercase</option>
                <option value="capitalize">Capitalize</option>
              </Select>
            </Box>
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="font-slider" gutterBottom>
              Alignment
            </Typography>
            <Box>
              <Select native value={props.align} style={{ display: "block" }}>
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
