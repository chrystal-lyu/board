export const CHANGE_MAIN_BACKGROUND = "CHANGE_MAIN_BACKGROUND";
export const CHANGE_PAGE_WIDTH = "CHANGE_PAGE_WIDTH";

export interface ChangeMainBgAction {
  type: typeof CHANGE_MAIN_BACKGROUND;
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

type ColorConfig = {
  color?: string;
};

type GradientConfig = {
  color?: string;
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
};

type Config = ColorConfig | GradientConfig;
type Components = Container[] | Text[];

export interface MainState {
  background: {
    style: {
      options: string;
      config: Config;
    };
  };
  page: {
    width?: string;
    textAlign?: string;
    components?: Components;
  };
}
