import {
  SET_CONTAINER_ID,
  SET_COMPONENT_ID,
  SetContainerId,
  SetComponentId,
} from "./edit.types";

export const setContainerId = (payload: number | null): SetContainerId => {
  return {
    type: SET_CONTAINER_ID,
    payload,
  };
};

export const setComponentId = (payload: number | null): SetComponentId => {
  return {
    type: SET_COMPONENT_ID,
    payload,
  };
};
