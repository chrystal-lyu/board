import React, { useState, useEffect } from "react";
import { OwnProps } from "./types";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Box, Button, Slider, Select, Typography } from "@material-ui/core";
import { UploadContainer, UploadButton } from "./index.style";

const ImageEditor: React.FC<OwnProps> = (props) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string | undefined>();

  useEffect(() => {
    if (props.url) {
      setPreview(props.url);
      return;
    }
    if (!selectedFile && !props.url) {
      setPreview(undefined);
      return;
    }
    const objectUrl: string = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, props]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Box>
      <Box my={4}>
        <Box my={3} aria-labelledby="text-content">
          <UploadContainer url={preview}>
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
