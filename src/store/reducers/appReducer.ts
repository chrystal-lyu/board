import sample from "../../sample.json";
import { MainState } from "../actions/app.types";

const initialState: MainState = sample;
console.log(initialState);

const appReducer = (state = initialState): MainState => {
  // switch (action.type) {
  //   case CHANGE_TITLE:
  //     return {
  //       ...state,
  //       title: action.payload,
  //     };
  //   case CHANGE_BG_COLOR:
  //     return {
  //       ...state,
  //       backgroundColor: action.payload,
  //     };
  //   default:
  return state;
  // }
};

export default appReducer;
