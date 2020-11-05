import {
  CHANGE_MAIN_BACKGROUND,
  CHANGE_MAIN_BACKGROUND_STYLE,
  CHANGE_PAGE_WIDTH,
  ChangeMainBgAction,
  ChangeMainBgStyleAction,
  ChangePageWidthAction,
} from "./app.types";

export const changeMainBg = (payload: string): ChangeMainBgAction => {
  return {
    type: CHANGE_MAIN_BACKGROUND,
    payload,
  };
};

export const changeMainBgStyle = (payload: string): ChangeMainBgStyleAction => {
  return {
    type: CHANGE_MAIN_BACKGROUND_STYLE,
    payload,
  };
};

export const changePageWidth = (payload: string): ChangePageWidthAction => {
  return {
    type: CHANGE_PAGE_WIDTH,
    payload,
  };
};
