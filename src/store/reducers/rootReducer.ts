import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({ board: boardReducer, app: appReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
