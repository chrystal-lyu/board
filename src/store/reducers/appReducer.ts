import sample from "../../sample.json";
import {
  CHANGE_MAIN_BACKGROUND,
  CHANGE_COLOR_STOP_1,
  CHANGE_STOP_POSITION_1,
  CHANGE_COLOR_STOP_2,
  CHANGE_STOP_POSITION_2,
  CHANGE_MAIN_BACKGROUND_STYLE,
  CHANGE_PAGE_WIDTH,
  ChangeMainBgAction,
  ChangeColorStop1Action,
  ChangeColorStop2Action,
  ChangeStopPosition1Action,
  ChangeStopPosition2Action,
  ChangeMainBgStyleAction,
  ChangePageWidthAction,
  MainState,
} from "../actions/app.types";

const initialState: MainState = sample;

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
): MainState => {
  switch (action.type) {
    case CHANGE_MAIN_BACKGROUND:
      return {
        ...state,
        background: {
          ...state.background,
          style: {
            ...state.background.style,
            config: {
              ...state.background.style.config,
              color: action.payload,
            },
          },
        },
      };
    case CHANGE_COLOR_STOP_1:
      return {
        ...state,
        background: {
          ...state.background,
          style: {
            ...state.background.style,
            config: {
              ...state.background.style.config,
              colorStop1: action.payload,
            },
          },
        },
      };
    case CHANGE_STOP_POSITION_1:
      return {
        ...state,
        background: {
          ...state.background,
          style: {
            ...state.background.style,
            config: {
              ...state.background.style.config,
              stopPosition1: action.payload,
            },
          },
        },
      };
    case CHANGE_COLOR_STOP_2:
      return {
        ...state,
        background: {
          ...state.background,
          style: {
            ...state.background.style,
            config: {
              ...state.background.style.config,
              colorStop2: action.payload,
            },
          },
        },
      };
    case CHANGE_STOP_POSITION_2:
      return {
        ...state,
        background: {
          ...state.background,
          style: {
            ...state.background.style,
            config: {
              ...state.background.style.config,
              stopPosition2: action.payload,
            },
          },
        },
      };
    case CHANGE_MAIN_BACKGROUND_STYLE:
      return {
        ...state,
        background: {
          ...state.background,
          style: {
            ...state.background.style,
            options: action.payload,
          },
        },
      };
    case CHANGE_PAGE_WIDTH:
      return {
        ...state,
        page: {
          ...state.page,
          width: action.payload,
        },
      };
    default:
      return state;
  }
};

export default appReducer;
