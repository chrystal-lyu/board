export const CHANGE_MAIN_BACKGROUND = "CHANGE_MAIN_BACKGROUND";
export const CHANGE_COLOR_STOP_1 = "CHANGE_COLOR_STOP_1";
export const CHANGE_STOP_POSITION_1 = "CHANGE_STOP_POSITION_1";
export const CHANGE_COLOR_STOP_2 = "CHANGE_COLOR_STOP_2";
export const CHANGE_STOP_POSITION_2 = "CHANGE_STOP_POSITION_2";
export const CHANGE_MAIN_BACKGROUND_STYLE = "CHANGE_MAIN_BACKGROUND_STYLE";
export const CHANGE_PAGE_WIDTH = "CHANGE_PAGE_WIDTH";

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

type Text = {
  type: string;
  content?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  textAlign?: string;
};

type Container = {
  type: string;
  components: Text[];
};

type StyleConfig = {
  color?: string;
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
};

type Components = Container[] | Text[];

export interface MainState {
  background: {
    style: {
      options: string;
      config: StyleConfig;
    };
  };
  page: {
    width?: string;
    textAlign?: string;
    components?: Components;
  };
}
