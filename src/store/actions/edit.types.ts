export const SET_CONTAINER_ID = "SET_CONTAINER_ID";
export const SET_COMPONENT_ID = "SET_COMPONENT_ID";

export interface SetContainerId {
  type: typeof SET_CONTAINER_ID;
  payload: number | null;
}

export interface SetComponentId {
  type: typeof SET_COMPONENT_ID;
  payload: number | null;
}

export interface EditState {
  containerId: number | null;
  componentId: number | null;
}
