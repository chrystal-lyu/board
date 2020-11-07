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
} from "../../store/actions";
import {
  Box,
  Button,
  Drawer,
  Slider,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ColorPicker from "./ColorPicker";
import GradientPicker from "./GradientPicker";
import TextEditor from "./TextEditor";
import { OwnProps } from "./types";
import { RootState } from "../../store/reducers/rootReducer";

const Editor: React.FC<OwnProps> = ({
  isShowing,
  title,
  hide,
  textContent,
}) => {
  const dispatch = useDispatch();
  const { background, page } = useSelector((state: RootState) => state.app);
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
                  defaultValue={Number(page.width)}
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
            {textContent && (
              <TextEditor content={textContent} />
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
