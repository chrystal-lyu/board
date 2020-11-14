import {
  CHANGE_MAIN_BACKGROUND,
  CHANGE_COLOR_STOP_1,
  CHANGE_STOP_POSITION_1,
  CHANGE_COLOR_STOP_2,
  CHANGE_STOP_POSITION_2,
  CHANGE_MAIN_BACKGROUND_STYLE,
  CHANGE_PAGE_WIDTH,
  CHANGE_CONTAINER_BACKGROUND,
  CHANGE_TEXT_CONTENT,
  CHANGE_TEXT_SIZE,
  CHANGE_IMAGE_URL,
  CHANGE_IMAGE_SHAPE,
  ChangeMainBgAction,
  ChangeColorStop1Action,
  ChangeStopPosition1Action,
  ChangeColorStop2Action,
  ChangeStopPosition2Action,
  ChangeMainBgStyleAction,
  ChangePageWidthAction,
  ChangeContainerBackgroundAction,
  ChangeTextContentAction,
  ChangeTextSizeAction,
  ChangeImageUrlAction,
  ChangeImageShapeAction,
} from "./app.types";

export const changeMainBg = (payload: string): ChangeMainBgAction => {
  return {
    type: CHANGE_MAIN_BACKGROUND,
    payload,
  };
};

export const changeMainBgStyle = (payload: string): ChangeMainBgStyleAction => {
  return {
    type: CHANGE_MAIN_BACKGROUND_STYLE,
    payload,
  };
};

export const changePageWidth = (payload: string): ChangePageWidthAction => {
  return {
    type: CHANGE_PAGE_WIDTH,
    payload,
  };
};

export const changeColorStop1 = (payload: string): ChangeColorStop1Action => {
  return {
    type: CHANGE_COLOR_STOP_1,
    payload,
  };
};

export const changeStopPosition1 = (
  payload: number
): ChangeStopPosition1Action => {
  return {
    type: CHANGE_STOP_POSITION_1,
    payload,
  };
};

export const changeColorStop2 = (payload: string): ChangeColorStop2Action => {
  return {
    type: CHANGE_COLOR_STOP_2,
    payload,
  };
};

export const changeStopPosition2 = (
  payload: number
): ChangeStopPosition2Action => {
  return {
    type: CHANGE_STOP_POSITION_2,
    payload,
  };
};

export const changeContainerBackground = (
  containerId: number,
  color: string
): ChangeContainerBackgroundAction => {
  return {
    type: CHANGE_CONTAINER_BACKGROUND,
    containerId,
    color,
  };
};

export const changeTextContent = (
  containerId: number | null,
  componentId: number | null,
  content: string
): ChangeTextContentAction => {
  return {
    type: CHANGE_TEXT_CONTENT,
    containerId,
    componentId,
    content,
  };
};

export const changeTextSize = (
  containerId: number | null,
  componentId: number | null,
  size: number
): ChangeTextSizeAction => {
  return {
    type: CHANGE_TEXT_SIZE,
    containerId,
    componentId,
    size,
  };
};

export const changeImageUrl = (
  containerId: number | null,
  componentId: number | null,
  url: string
): ChangeImageUrlAction => {
  return {
    type: CHANGE_IMAGE_URL,
    containerId,
    componentId,
    url,
  };
};

export const changeImageShape = (
  containerId: number | null,
  componentId: number | null,
  shape: string
): ChangeImageShapeAction => {
  return {
    type: CHANGE_IMAGE_SHAPE,
    containerId,
    componentId,
    shape,
  };
};
