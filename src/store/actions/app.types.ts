export const CHANGE_MAIN_BACKGROUND = "CHANGE_MAIN_BACKGROUND";

export interface ChangeMainBgAction {
  type: typeof CHANGE_MAIN_BACKGROUND;
  payload: string;
}

interface Text {
  type: string;
  content?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  textAlign?: string;
}

interface Container {
  type: string;
  components: Text[];
}

interface ColorOptions {
  color?: string;
}

interface GradientOptions {
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
}

export interface MainState {
  background: {
    style: {
      options: string;
      config: ColorOptions | GradientOptions;
    };
  };
  page: {
    width?: number;
    textAlign?: string;
    components?: Container[] | Text[];
  };
}
