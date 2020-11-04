import sample from "../../sample.json";
import {
  CHANGE_MAIN_BACKGROUND,
  CHANGE_PAGE_WIDTH,
  ChangeMainBgAction,
  ChangePageWidthAction,
  MainState,
} from "../actions/app.types";

const initialState: MainState = sample;

const appReducer = (
  state = initialState,
  action: ChangeMainBgAction | ChangePageWidthAction
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
              color: action.payload,
            },
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
