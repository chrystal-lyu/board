import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlockPicker } from "react-color";
import {
  changeMainBg,
  changeColorStop1,
  changeStopPosition1,
  changeColorStop2,
  changeStopPosition2,
  changeMainBgStyle,
  changePageWidth,
} from "../../store/actions";
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
import ColorPicker from "./ColorPicker";
import GradientPicker from "./GradientPicker";
import { OwnProps } from "./types";
import { RootState } from "../../store/reducers/rootReducer";

const Editor: React.FC<OwnProps> = ({
  isShowing,
  title,
  hide,
  textContent,
  width,
}) => {
  const dispatch = useDispatch();
  const [showColorSwatch, setShowColorSwatch] = useState(false);
  const { background, page } = useSelector((state: RootState) => state.app);
  const { config } = background.style;
  const { options } = background.style;

  const valuetext = (value: number) => {
    return `${value}px`;
  };

  const renderBackgroundOptions = () => {
    switch (options) {
      case "color":
        if (config.color !== undefined) {
          return (
            <Box>
              <ColorPicker
                value={config.color}
                handleClick={() => setShowColorSwatch(true)}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(changeMainBg(e.target.value))
                }
              />
              {showColorSwatch && (
                <BlockPicker
                  color={config.color}
                  onChange={(color) => dispatch(changeMainBg(color.hex))}
                />
              )}
            </Box>
          );
        }
      case "gradient":
        return (
          <GradientPicker
            colorStop1={config.colorStop1}
            stopPosition1={config.stopPosition1}
            colorStop2={config.colorStop2}
            stopPosition2={config.stopPosition2}
            handleChangeColorStop1={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changeColorStop1(e.target.value))
            }
            handleChangeStopPosition1={(value: number) =>
              dispatch(changeStopPosition1(value))
            }
            handleChangeColorStop2={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changeColorStop2(e.target.value))
            }
            handleChangeStopPosition2={(value: number) =>
              dispatch(changeStopPosition2(value))
            }
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
