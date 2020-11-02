export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_BG_COLOR = "CHANGE_BG_COLOR";

interface ChangeTitleAction {
  type: typeof CHANGE_TITLE;
  payload: string;
}

interface ChangeBgColorAction {
  type: typeof CHANGE_BG_COLOR;
  payload: string;
}

export interface BoardState {
  title?: string;
  backgroundColor?: string;
}

export type BoardActionTypes = ChangeTitleAction | ChangeBgColorAction;
