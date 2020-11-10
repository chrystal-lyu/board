export const SET_CONTAINER_ID = "SET_CONTAINER_ID";
export const SET_COMPONENT_ID = "SET_COMPONENT_ID";

export interface SetContainerId {
  type: typeof SET_CONTAINER_ID;
  payload: number;
}

export interface SetComponentId {
  type: typeof SET_COMPONENT_ID;
  payload: number;
}

export interface EditState {
  containerId: number;
  componentId?: number | null;
}
