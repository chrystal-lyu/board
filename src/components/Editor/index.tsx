import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMainBg,
  changeColorStop1,
  changeStopPosition1,
  changeColorStop2,
  changeStopPosition2,
  changeMainBgStyle,
  changePageWidth,
  changeContainerBackground,
  changeContainerBorderRadius,
  changeContainerDropShadow,
  changeTextColor,
} from "../../store/actions";
import {
  Box,
  Button,
  Drawer,
  Slider,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Menu from "../Menu";
import ColorPicker from "./ColorPicker";
import GradientPicker from "./GradientPicker";
import TextEditor from "./TextEditor";
import { OwnProps } from "./types";
import { RootState } from "../../store/reducers/rootReducer";
import ImageEditor from "./ImageEditor";

const Editor: React.FC<OwnProps> = ({
  isShowing,
  title,
  hide,
  textContent,
  textColor,
  textFontFamily,
  textSize,
  textWeight,
  textLineHeight,
  textLetterSpacing,
  textMargin,
  textTransform,
  textAlign,
  imageUrl,
  imageShape,
  // containerId,
  containerBgColor,
  containerBorderRadius,
  containerDropShadow,
}) => {
  const dispatch = useDispatch();
  const { background, page } = useSelector((state: RootState) => state.app);
  const { containerId, componentId } = useSelector(
    (state: RootState) => state.edit
  );
  const { config } = background.style;
  const { options } = background.style;

  const renderBackgroundOptions = () => {
    switch (options) {
      case "color":
        return (
          <ColorPicker
            value={config.color}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changeMainBg(e.target.value))
            }
            handlePickerChange={(value: string) =>
              dispatch(changeMainBg(value))
            }
          />
        );
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
        {(title === "Background" ||
          title === "Page" ||
          title === "Container") && <Menu />}
        <Box m={4} width={300}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Box>
            {title === "Background" && (
              <Box>
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
                {renderBackgroundOptions()}
              </Box>
            )}
            {title === "Page" && (
              <Box width={300}>
                <Typography id="continuous-slider" gutterBottom>
                  Width
                </Typography>
                <Slider
                  value={Number(page.width)}
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
            {title === "Container" && (
              <Box my={4}>
                <Box my={3}>
                  <ColorPicker
                    value={containerBgColor}
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      dispatch(
                        changeContainerBackground(containerId, e.target.value)
                      )
                    }
                    handlePickerChange={(value: string) =>
                      dispatch(changeContainerBackground(containerId, value))
                    }
                  />
                </Box>
                <Box my={3}>
                  <FormControlLabel
                    label="Drop Shadow"
                    control={
                      <Checkbox
                        checked={containerDropShadow}
                        color="primary"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          dispatch(
                            changeContainerDropShadow(
                              containerId,
                              e.target.checked
                            )
                          );
                        }}
                      />
                    }
                  />
                </Box>
                <Box my={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    Border Radius
                  </Typography>
                  <Slider
                    value={containerBorderRadius}
                    min={0}
                    max={50}
                    step={2}
                    valueLabelDisplay="auto"
                    onChange={(e, newValue) =>
                      dispatch(
                        changeContainerBorderRadius(
                          containerId,
                          newValue as number
                        )
                      )
                    }
                  />
                </Box>
              </Box>
            )}
            {title === "Text" && (
              <TextEditor
                content={textContent}
                size={textSize}
                color={textColor}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    changeTextColor(containerId, componentId, e.target.value)
                  )
                }
                handlePickerChange={(value: string) =>
                  dispatch(changeTextColor(containerId, componentId, value))
                }
                font={textFontFamily}
                weight={textWeight}
                height={textLineHeight}
                spacing={textLetterSpacing}
                margin={textMargin}
                transform={textTransform}
                align={textAlign}
              />
            )}
            {title === "Image" && (
              <ImageEditor url={imageUrl} shape={imageShape} />
            )}
          </Box>
        </Box>
        <Box m={4}>
          <Button
            fullWidth={true}
            color="primary"
            variant="contained"
            onClick={(e) => hide(e)}
          >
            DONE
          </Button>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Editor;
