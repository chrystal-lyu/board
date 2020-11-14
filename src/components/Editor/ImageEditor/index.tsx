import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OwnProps } from "./types";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Box, Button, Slider, Select, Typography } from "@material-ui/core";
import { UploadContainer, UploadButton } from "./index.style";
import { changeImageUrl, changeImageShape } from "../../../store/actions";
import { RootState } from "../../../store/reducers/rootReducer";

const ImageEditor: React.FC<OwnProps> = (props) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string | undefined>(props.url);
  const dispatch = useDispatch();
  const { containerId, componentId } = useSelector(
    (state: RootState) => state.edit
  );

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile) {
      const objectUrl: string = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      dispatch(changeImageUrl(containerId, componentId, objectUrl));
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile, containerId, componentId, dispatch]);

  return (
    <Box>
      <Box my={4}>
        <Box my={3} aria-labelledby="text-content">
          <UploadContainer url={preview as string}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="icon-button-photo"
              onChange={onSelectFile}
              type="file"
            />
            <UploadButton>
              <label htmlFor="icon-button-photo">
                <Button
                  component="span"
                  color="primary"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                </Button>
              </label>
            </UploadButton>
          </UploadContainer>
        </Box>
        <Typography variant="h6" id="text-appearance" gutterBottom>
          Appearance
        </Typography>
        <Box aria-labelledby="text-appearance">
          <Box my={3}>
            <Typography variant="subtitle2" id="font-slider" gutterBottom>
              Shape
            </Typography>
            <Box>
              <Select
                native
                value={props.shape}
                style={{ display: "block" }}
                onChange={(e) => {
                  dispatch(
                    changeImageShape(containerId, componentId, e.target.value as string)
                  );
                }}
              >
                <option value="rectangular">Rectangular</option>
                <option value="circle">Circle</option>
              </Select>
            </Box>
          </Box>
          <Box my={3}>
            <Typography variant="subtitle2" id="size-slider" gutterBottom>
              Scale
            </Typography>
            <Slider
              defaultValue={10}
              aria-labelledby="size-slider"
              min={8}
              max={48}
              step={2}
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageEditor;
