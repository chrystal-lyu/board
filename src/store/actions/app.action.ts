import {
  CHANGE_MAIN_BACKGROUND,
  CHANGE_COLOR_STOP_1,
  CHANGE_STOP_POSITION_1,
  CHANGE_COLOR_STOP_2,
  CHANGE_STOP_POSITION_2,
  CHANGE_MAIN_BACKGROUND_STYLE,
  CHANGE_PAGE_WIDTH,
  CHANGE_CONTAINER_BACKGROUND,
  CHANGE_CONTAINER_BORDER_RADIUS,
  CHANGE_CONTAINER_DROP_SHADOW,
  CHANGE_TEXT_CONTENT,
  CHANGE_TEXT_COLOR,
  CHANGE_TEXT_SIZE,
  CHANGE_TEXT_FONT,
  CHANGE_TEXT_WEIGHT,
  CHANGE_TEXT_HEIGHT,
  CHANGE_TEXT_SPACING,
  CHANGE_TEXT_MARGIN,
  CHANGE_TEXT_TRANSFORM,
  CHANGE_TEXT_ALIGN,
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
  ChangeContainerBorderRadiusAction,
  ChangeContainerDropShadowAction,
  ChangeTextContentAction,
  ChangeTextColorAction,
  ChangeTextSizeAction,
  ChangeTextFontAction,
  ChangeTextWeightAction,
  ChangeTextHeightAction,
  ChangeTextSpacingAction,
  ChangeTextMarginAction,
  ChangeTextTransformAction,
  ChangeTextAlignAction,
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
  containerId: number | null,
  color: string
): ChangeContainerBackgroundAction => {
  return {
    type: CHANGE_CONTAINER_BACKGROUND,
    containerId,
    color,
  };
};

export const changeContainerBorderRadius = (
  containerId: number | null,
  borderRadius: number
): ChangeContainerBorderRadiusAction => {
  return {
    type: CHANGE_CONTAINER_BORDER_RADIUS,
    containerId,
    borderRadius,
  };
};

export const changeContainerDropShadow = (
  containerId: number | null,
  dropShadow: boolean
): ChangeContainerDropShadowAction => {
  return {
    type: CHANGE_CONTAINER_DROP_SHADOW,
    containerId,
    dropShadow,
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

export const changeTextColor = (
  containerId: number | null,
  componentId: number | null,
  color: string
): ChangeTextColorAction => {
  return {
    type: CHANGE_TEXT_COLOR,
    containerId,
    componentId,
    color,
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

export const changeTextFont = (
  containerId: number | null,
  componentId: number | null,
  font: string
): ChangeTextFontAction => {
  return {
    type: CHANGE_TEXT_FONT,
    containerId,
    componentId,
    font,
  };
};

export const changeTextWeight = (
  containerId: number | null,
  componentId: number | null,
  weight: number,
): ChangeTextWeightAction => {
  return {
    type: CHANGE_TEXT_WEIGHT,
    containerId,
    componentId,
    weight,
  };
};

export const changeTextHeight = (
  containerId: number | null,
  componentId: number | null,
  height: number
): ChangeTextHeightAction => {
  return {
    type: CHANGE_TEXT_HEIGHT,
    containerId,
    componentId,
    height,
  };
};

export const changeTextSpacing= (
  containerId: number | null,
  componentId: number | null,
  spacing: number
): ChangeTextSpacingAction => {
  return {
    type: CHANGE_TEXT_SPACING,
    containerId,
    componentId,
    spacing,
  };
};

export const changeTextMargin = (
  containerId: number | null,
  componentId: number | null,
  margin: number
): ChangeTextMarginAction => {
  return {
    type: CHANGE_TEXT_MARGIN,
    containerId,
    componentId,
    margin,
  };
};

export const changeTextTransform = (
  containerId: number | null,
  componentId: number | null,
  transform: string
): ChangeTextTransformAction => {
  return {
    type: CHANGE_TEXT_TRANSFORM,
    containerId,
    componentId,
    transform,
  };
};

export const changeTextAlign = (
  containerId: number | null,
  componentId: number | null,
  align: string
): ChangeTextAlignAction => {
  return {
    type: CHANGE_TEXT_ALIGN,
    containerId,
    componentId,
    align,
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
