export const CHANGE_MAIN_BACKGROUND = "CHANGE_MAIN_BACKGROUND";
export const CHANGE_COLOR_STOP_1 = "CHANGE_COLOR_STOP_1";
export const CHANGE_STOP_POSITION_1 = "CHANGE_STOP_POSITION_1";
export const CHANGE_COLOR_STOP_2 = "CHANGE_COLOR_STOP_2";
export const CHANGE_STOP_POSITION_2 = "CHANGE_STOP_POSITION_2";
export const CHANGE_MAIN_BACKGROUND_STYLE = "CHANGE_MAIN_BACKGROUND_STYLE";
export const CHANGE_PAGE_WIDTH = "CHANGE_PAGE_WIDTH";
export const CHANGE_CONTAINER_BACKGROUND = "CHANGE_CONTAINER_BACKGROUND";
export const CHANGE_CONTAINER_BORDER_RADIUS = "CHANGE_CONTAINER_BORDER_RADIUS";
export const CHANGE_CONTAINER_DROP_SHADOW = "CHANGE_CONTAINER_DROP_SHADOW";
export const CHANGE_TEXT_CONTENT = "CHANGE_TEXT_CONTENT";
export const CHANGE_TEXT_COLOR = "CHANGE_TEXT_COLOR";
export const CHANGE_TEXT_SIZE = "CHANGE_TEXT_SIZE";
export const CHANGE_TEXT_FONT = "CHANGE_TEXT_FONT";
export const CHANGE_TEXT_WEIGHT = "CHANGE_TEXT_WEIGHT";
export const CHANGE_TEXT_HEIGHT = "CHANGE_TEXT_HEIGHT";
export const CHANGE_TEXT_SPACING = "CHANGE_TEXT_SPACING";
export const CHANGE_TEXT_MARGIN = "CHANGE_TEXT_MARGIN";
export const CHANGE_TEXT_TRANSFORM = "CHANGE_TEXT_TRANSFORM";
export const CHANGE_TEXT_ALIGN = "CHANGE_TEXT_ALIGN";
export const CHANGE_IMAGE_URL = "CHANGE_IMAGE_URL";
export const CHANGE_IMAGE_SHAPE = "CHANGE_IMAGE_SHAPE";

export const REMOVE_CONTAINER = "REMOVE_CONTAINER";
export const ADD_CONTAINER = "ADD_CONTAINER";
export const REMOVE_COMPONENT = "REMOVE_COMPONENT";
export const ADD_COMPONENT = "ADD_COMPONENT";

export const REORDER_COMPONENT = "REORDER_COMPONENT";

export interface ChangeMainBgAction {
  type: typeof CHANGE_MAIN_BACKGROUND;
  payload: string;
}

export interface ChangeColorStop1Action {
  type: typeof CHANGE_COLOR_STOP_1;
  payload: string;
}

export interface ChangeStopPosition1Action {
  type: typeof CHANGE_STOP_POSITION_1;
  payload: number;
}

export interface ChangeColorStop2Action {
  type: typeof CHANGE_COLOR_STOP_2;
  payload: string;
}

export interface ChangeStopPosition2Action {
  type: typeof CHANGE_STOP_POSITION_2;
  payload: number;
}

export interface ChangeMainBgStyleAction {
  type: typeof CHANGE_MAIN_BACKGROUND_STYLE;
  payload: string;
}

export interface ChangePageWidthAction {
  type: typeof CHANGE_PAGE_WIDTH;
  payload: string;
}

export interface ChangeContainerBackgroundAction {
  type: typeof CHANGE_CONTAINER_BACKGROUND;
  containerId: string | null;
  color: string;
}

export interface ChangeContainerBorderRadiusAction {
  type: typeof CHANGE_CONTAINER_BORDER_RADIUS;
  containerId: string | null;
  borderRadius: number;
}

export interface ChangeContainerDropShadowAction {
  type: typeof CHANGE_CONTAINER_DROP_SHADOW;
  containerId: string | null;
  dropShadow: boolean;
}

export interface ChangeTextContentAction {
  type: typeof CHANGE_TEXT_CONTENT;
  containerId?: string | null;
  componentId?: string | null;
  content: string;
}

export interface ChangeTextColorAction {
  type: typeof CHANGE_TEXT_COLOR;
  containerId?: string | null;
  componentId?: string | null;
  color: string;
}

export interface ChangeTextSizeAction {
  type: typeof CHANGE_TEXT_SIZE;
  containerId?: string | null;
  componentId?: string | null;
  size: number;
}

export interface ChangeTextFontAction {
  type: typeof CHANGE_TEXT_FONT;
  containerId?: string | null;
  componentId?: string | null;
  font: string;
}

export interface ChangeTextWeightAction {
  type: typeof CHANGE_TEXT_WEIGHT;
  containerId?: string | null;
  componentId?: string | null;
  weight: number;
}

export interface ChangeTextHeightAction {
  type: typeof CHANGE_TEXT_HEIGHT;
  containerId?: string | null;
  componentId?: string | null;
  height: number;
}

export interface ChangeTextSpacingAction {
  type: typeof CHANGE_TEXT_SPACING;
  containerId?: string | null;
  componentId?: string | null;
  spacing: number;
}

export interface ChangeTextMarginAction {
  type: typeof CHANGE_TEXT_MARGIN;
  containerId?: string | null;
  componentId?: string | null;
  margin: number;
}

export interface ChangeTextTransformAction {
  type: typeof CHANGE_TEXT_TRANSFORM;
  containerId?: string | null;
  componentId?: string | null;
  transform: string;
}

export interface ChangeTextAlignAction {
  type: typeof CHANGE_TEXT_ALIGN;
  containerId?: string | null;
  componentId?: string | null;
  align: string;
}

export interface ChangeImageUrlAction {
  type: typeof CHANGE_IMAGE_URL;
  containerId?: string | null;
  componentId?: string | null;
  url: string;
}

export interface ChangeImageShapeAction {
  type: typeof CHANGE_IMAGE_SHAPE;
  containerId?: string | null;
  componentId?: string | null;
  shape: string;
}

export interface RemoveContainerAction {
  type: typeof REMOVE_CONTAINER;
  containerId: string;
}

export interface AddContainerAction {
  type: typeof ADD_CONTAINER;
  containerType: string;
}

export interface RemoveComponentAction {
  type: typeof REMOVE_COMPONENT;
  containerId: string;
  componentId: string;
}

export interface AddComponentAction {
  type: typeof ADD_COMPONENT;
  containerId: string;
  componentType: string;
}

export interface ReorderComponentAction {
  type: typeof REORDER_COMPONENT;
  containerId: string;
  dragIndex: number;
  hoverIndex: number;
}

type StyleConfig = {
  color?: string;
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
};

export type Text = {
  id: string;
  type?: string;
  content?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  margin?: number;
  textTransform?: string;
  textAlign?: string;
};

export type Image = {
  id: string;
  type?: string;
  url?: string;
  shape?: string;
  scale?: number;
  crop?: {
    topLeft: number[];
    bottomRight: number[];
  };
};

export type Components = Text & Image;

export type Component = {
  id: string;
  type?: string;
  backgroundColor?: string;
  borderRadius?: number;
  dropShadow?: boolean;
  components?: Components[];
};

export type Container = Text & Component & Image;

export interface AppState {
  background: {
    style: {
      options: string;
      config: StyleConfig;
    };
  };
  page: {
    width?: string;
    textAlign?: string;
    containers: Container[];
  };
}
