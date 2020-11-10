import { combineReducers } from "redux";
import appReducer from "./appReducer";
import editReducer from "./editReducer";

const rootReducer = combineReducers({ app: appReducer, edit: editReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
