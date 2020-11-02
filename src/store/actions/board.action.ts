import { CHANGE_TITLE, CHANGE_BG_COLOR, BoardActionTypes } from "./board.types";

export const changeTitle = (payload: string): BoardActionTypes => {
  return {
    type: CHANGE_TITLE,
    payload,
  };
};

export const changeBgColor = (payload: string): BoardActionTypes => {
  return {
    type: CHANGE_BG_COLOR,
    payload,
  };
};
