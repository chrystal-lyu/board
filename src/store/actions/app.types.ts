export const CHANGE_MAIN_BACKGROUND = 'CHANGE_MAIN_BACKGROUND';

export interface ChangeMainBgAction {
  type: typeof CHANGE_MAIN_BACKGROUND;
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
}

type Container = {
  type: string;
  components: Text[];
}

type ColorConfig = {
  color?: string;
}

type GradientConfig = {
  color?: string;
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
}

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
    width?: number;
    textAlign?: string;
    components?: Components;
  }
}
