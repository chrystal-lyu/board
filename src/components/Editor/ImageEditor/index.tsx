import React, { useState, useEffect } from "react";
import { OwnProps } from "./types";
import { PhotoCamera } from "@material-ui/icons";
import {
  Box,
  TextField,
  Slider,
  Select,
  Typography,
  IconButton,
} from "@material-ui/core";

const ImageEditor: React.FC<OwnProps> = (props) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl: string = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  };
  return (
    <Box>
      <Box my={4}>
        <Typography variant="h6" id="text-content" gutterBottom>
          Image Upload
        </Typography>
        <Box my={3} aria-labelledby="text-content">
          <TextField
            fullWidth
            value={props.url}
            label="Content"
            variant="standard"
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-photo"
            onChange={onSelectFile}
            type="file"
          />
          <label htmlFor="icon-button-photo">
            <IconButton color="primary" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          {selectedFile && <img width={200} height={200} src={preview} />}
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
              <Select native value="circle" style={{ display: "block" }}>
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
