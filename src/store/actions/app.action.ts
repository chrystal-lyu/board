import {
  CHANGE_MAIN_BACKGROUND,
  CHANGE_PAGE_WIDTH,
  ChangeMainBgAction,
  ChangePageWidthAction,
} from "./app.types";

export const changeMainBg = (payload: string): ChangeMainBgAction => {
  return {
    type: CHANGE_MAIN_BACKGROUND,
    payload,
  };
};

export const changePageWidth = (payload: string): ChangePageWidthAction => {
  return {
    type: CHANGE_PAGE_WIDTH,
    payload,
  };
};
