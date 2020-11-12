import sample from "../../sample.json";
import produce from "immer";
import {
  CHANGE_MAIN_BACKGROUND,
  CHANGE_COLOR_STOP_1,
  CHANGE_STOP_POSITION_1,
  CHANGE_COLOR_STOP_2,
  CHANGE_STOP_POSITION_2,
  CHANGE_MAIN_BACKGROUND_STYLE,
  CHANGE_PAGE_WIDTH,
  CHANGE_TEXT_CONTENT,
  CHANGE_TEXT_SIZE,
  ChangeMainBgAction,
  ChangeColorStop1Action,
  ChangeColorStop2Action,
  ChangeStopPosition1Action,
  ChangeStopPosition2Action,
  ChangeMainBgStyleAction,
  ChangePageWidthAction,
  ChangeTextContentAction,
  ChangeTextSizeAction,
  AppState,
} from "../actions/app.types";
import { changeTextContent, changeTextSize } from "../../utils";

const initialState: AppState = sample;

const appReducer = (
  state = initialState,
  action:
    | ChangeMainBgAction
    | ChangeColorStop1Action
    | ChangeStopPosition1Action
    | ChangeColorStop2Action
    | ChangeStopPosition2Action
    | ChangeMainBgStyleAction
    | ChangePageWidthAction
    | ChangeTextContentAction
    | ChangeTextSizeAction
): AppState => {
  switch (action.type) {
    case CHANGE_MAIN_BACKGROUND:
      return produce(state, (draft) => {
        draft.background.style.config.color = action.payload;
      });
    case CHANGE_COLOR_STOP_1:
      return produce(state, (draft) => {
        draft.background.style.config.colorStop1 = action.payload;
      });
    case CHANGE_STOP_POSITION_1:
      return produce(state, (draft) => {
        draft.background.style.config.stopPosition1 = action.payload;
      });
    case CHANGE_COLOR_STOP_2:
      return produce(state, (draft) => {
        draft.background.style.config.colorStop2 = action.payload;
      });
    case CHANGE_STOP_POSITION_2:
      return produce(state, (draft) => {
        draft.background.style.config.stopPosition2 = action.payload;
      });
    case CHANGE_MAIN_BACKGROUND_STYLE:
      return produce(state, (draft) => {
        draft.background.style.options = action.payload;
      });
    case CHANGE_PAGE_WIDTH:
      return produce(state, (draft) => {
        draft.page.width = action.payload;
      });
    case CHANGE_TEXT_CONTENT:
      return changeTextContent(state, action);
    case CHANGE_TEXT_SIZE:
      return changeTextSize(state, action);
    default:
      return state;
  }
};

export default appReducer;
