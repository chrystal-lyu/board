import {
  CHANGE_TITLE,
  CHANGE_BG_COLOR,
  BoardState,
  BoardActionTypes,
} from "../actions/board.types";

const initialState: BoardState = {
  title: "My React app with TypeScript",
  backgroundColor: "#7bdcb5",
};

const boardReducer = (
  state = initialState,
  action: BoardActionTypes
): BoardState => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case CHANGE_BG_COLOR:
      return {
        ...state,
        backgroundColor: action.payload,
      };
    default:
      return state;
  }
};

export default boardReducer;
