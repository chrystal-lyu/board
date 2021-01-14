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
  REMOVE_CONTAINER,
  ADD_CONTAINER,
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  REORDER_COMPONENT,
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
  RemoveContainerAction,
  AddContainerAction,
  RemoveComponentAction,
  AddComponentAction,
  ReorderComponentAction,
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
  containerId: string | null,
  color: string
): ChangeContainerBackgroundAction => {
  return {
    type: CHANGE_CONTAINER_BACKGROUND,
    containerId,
    color,
  };
};

export const changeContainerBorderRadius = (
  containerId: string | null,
  borderRadius: number
): ChangeContainerBorderRadiusAction => {
  return {
    type: CHANGE_CONTAINER_BORDER_RADIUS,
    containerId,
    borderRadius,
  };
};

export const changeContainerDropShadow = (
  containerId: string | null,
  dropShadow: boolean
): ChangeContainerDropShadowAction => {
  return {
    type: CHANGE_CONTAINER_DROP_SHADOW,
    containerId,
    dropShadow,
  };
};

export const changeTextContent = (
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
  weight: number
): ChangeTextWeightAction => {
  return {
    type: CHANGE_TEXT_WEIGHT,
    containerId,
    componentId,
    weight,
  };
};

export const changeTextHeight = (
  containerId: string | null,
  componentId: string | null,
  height: number
): ChangeTextHeightAction => {
  return {
    type: CHANGE_TEXT_HEIGHT,
    containerId,
    componentId,
    height,
  };
};

export const changeTextSpacing = (
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
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
  containerId: string | null,
  componentId: string | null,
  shape: string
): ChangeImageShapeAction => {
  return {
    type: CHANGE_IMAGE_SHAPE,
    containerId,
    componentId,
    shape,
  };
};

export const removeContainer = (containerId: string): RemoveContainerAction => {
  return {
    type: REMOVE_CONTAINER,
    containerId,
  };
};

export const addContainer = (containerType: string): AddContainerAction => {
  return {
    type: ADD_CONTAINER,
    containerType,
  };
};

export const removeComponent = (
  containerId: string,
  componentId: string
): RemoveComponentAction => {
  return {
    type: REMOVE_COMPONENT,
    containerId,
    componentId,
  };
};

export const addComponent = (
  containerId: string,
  componentType: string
): AddComponentAction => {
  return {
    type: ADD_COMPONENT,
    containerId,
    componentType,
  };
};

export const reorderComponent = (
  containerId: string,
  dragIndex: number,
  hoverIndex: number
): ReorderComponentAction => {
  return {
    type: REORDER_COMPONENT,
    containerId,
    dragIndex,
    hoverIndex,
  };
};
