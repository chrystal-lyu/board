import sample from "../../sample.json";
import {
  CHANGE_MAIN_BACKGROUND,
  ChangeMainBgAction,
  MainState,
} from "../actions/app.types";

const initialState: MainState = sample;

const appReducer = (
  state = initialState,
  action: ChangeMainBgAction
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
    default:
      return state;
  }
};

export default appReducer;
