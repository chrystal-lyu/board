import produce from "immer";
import {
  EditState,
  SET_CONTAINER_ID,
  SET_COMPONENT_ID,
  SetContainerId,
  SetComponentId,
} from "../actions/edit.types";

const initialState: EditState = {
  containerId: 0,
  componentId: null,
};

const editReducer = (
  state = initialState,
  action: SetContainerId | SetComponentId
): EditState => {
  switch (action.type) {
    case SET_CONTAINER_ID:
      return produce(state, (draft) => {
        draft.containerId = action.payload;
      });
    case SET_COMPONENT_ID:
      return produce(state, (draft) => {
        draft.componentId = action.payload;
      });
    default:
      return state;
  }
};

export default editReducer;
