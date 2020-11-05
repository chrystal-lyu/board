import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Drawer,
  TextField,
  Slider,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { BlockPicker } from "react-color";
import { OwnProps } from "./types";
import { RootState } from "../../store/reducers/rootReducer";
import ColorPicker from "./ColorPicker";
import GradientPicker from "./GradientPicker";
import {
  changeMainBg,
  changeMainBgStyle,
  changePageWidth,
} from "../../store/actions";

const Editor: React.FC<OwnProps> = ({
  isShowing,
  title,
  hide,
  textContent,
  options,
  backgroundColor,
  width,
}) => {
  const dispatch = useDispatch();
  const [showColorSwatch, setShowColorSwatch] = useState(false);
  const { page } = useSelector((state: RootState) => state.app);

  const valuetext = (value: number) => {
    return `${value}px`;
  };

  const renderBackgroundOptions = () => {
    switch (options) {
      case "color":
        if (backgroundColor !== undefined) {
          return (
            <Box>
              <ColorPicker
                value={backgroundColor}
                handleClick={() => setShowColorSwatch(true)}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(changeMainBg(e.target.value))
                }
              />
              {showColorSwatch && (
                <BlockPicker
                  color={backgroundColor}
                  onChange={(color) => dispatch(changeMainBg(color.hex))}
                />
              )}
            </Box>
          );
        }
      case "gradient":
        return (
          <GradientPicker
            colorStop1="#FFC2B0"
            stopPosition1={28}
            colorStop2="#945374"
            stopPosition2={97}
          />
        );
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={isShowing}
        onClose={hide}
        BackdropProps={{ invisible: true }}
      >
        <Box m={2} width={300}>
          <h1>{title}</h1>
          <Box>
            {title === "Background" && (
              <Box mb={4}>
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Style</InputLabel>
                  <Select
                    native
                    value={options}
                    onChange={(e) => {
                      dispatch(changeMainBgStyle(e.target.value as string));
                    }}
                  >
                    <option value="color">Color</option>
                    <option value="gradient">Gradient</option>
                  </Select>
                </FormControl>
              </Box>
            )}
            {renderBackgroundOptions()}
            {textContent && (
              <TextField
                fullWidth
                value={textContent}
                label="Content"
                variant="outlined"
              />
            )}
            {width && (
              <Box width={300}>
                <Typography id="continuous-slider" gutterBottom>
                  Width
                </Typography>
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
          </Box>
        </Box>
        <Box mx={2}>
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
