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
export const CHANGE_TEXT_SIZE = "CHANGE_TEXT_SIZE";
export const CHANGE_IMAGE_URL = "CHANGE_IMAGE_URL";
export const CHANGE_IMAGE_SHAPE = "CHANGE_IMAGE_SHAPE";

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
  containerId: number | null;
  color: string;
}

export interface ChangeContainerBorderRadiusAction {
  type: typeof CHANGE_CONTAINER_BORDER_RADIUS;
  containerId: number | null;
  borderRadius: number;
}

export interface ChangeContainerDropShadowAction {
  type: typeof CHANGE_CONTAINER_DROP_SHADOW;
  containerId: number | null;
  dropShadow: boolean;
}

export interface ChangeTextContentAction {
  type: typeof CHANGE_TEXT_CONTENT;
  containerId?: number | null;
  componentId?: number | null;
  content: string;
}

export interface ChangeTextSizeAction {
  type: typeof CHANGE_TEXT_SIZE;
  containerId?: number | null;
  componentId?: number | null;
  size: number;
}

export interface ChangeImageUrlAction {
  type: typeof CHANGE_IMAGE_URL;
  containerId?: number | null;
  componentId?: number | null;
  url: string;
}

export interface ChangeImageShapeAction {
  type: typeof CHANGE_IMAGE_SHAPE;
  containerId?: number | null;
  componentId?: number | null;
  shape: string;
}

type StyleConfig = {
  color?: string;
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
};

export type Text = {
  id: number;
  type?: string;
  content?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  textAlign?: string;
};

export type Image = {
  id: number;
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
  id: number;
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
    containers?: Container[];
  };
}
