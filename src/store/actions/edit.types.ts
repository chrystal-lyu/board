export const SET_CONTAINER_ID = "SET_CONTAINER_ID";
export const SET_COMPONENT_ID = "SET_COMPONENT_ID";

export interface SetContainerId {
  type: typeof SET_CONTAINER_ID;
  payload: string | null;
}

export interface SetComponentId {
  type: typeof SET_COMPONENT_ID;
  payload: string | null;
}

export interface EditState {
  containerId: string | null;
  componentId: string | null;
}
