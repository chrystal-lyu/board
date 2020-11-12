export const CHANGE_MAIN_BACKGROUND = "CHANGE_MAIN_BACKGROUND";
export const CHANGE_COLOR_STOP_1 = "CHANGE_COLOR_STOP_1";
export const CHANGE_STOP_POSITION_1 = "CHANGE_STOP_POSITION_1";
export const CHANGE_COLOR_STOP_2 = "CHANGE_COLOR_STOP_2";
export const CHANGE_STOP_POSITION_2 = "CHANGE_STOP_POSITION_2";
export const CHANGE_MAIN_BACKGROUND_STYLE = "CHANGE_MAIN_BACKGROUND_STYLE";
export const CHANGE_PAGE_WIDTH = "CHANGE_PAGE_WIDTH";
export const CHANGE_TEXT_CONTENT = "CHANGE_TEXT_CONTENT";
export const CHANGE_TEXT_SIZE = "CHANGE_TEXT_SIZE";

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

export type Component = {
  id: number;
  type?: string;
  components?: Text[];
};

type StyleConfig = {
  color?: string;
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
};

export type Container = Text & Component;

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
