import {
  AppState,
  Container,
  ChangeContainerDropShadowAction,
} from "../store/actions/app.types";

export const changeContainerDropShadow = (
  state: AppState,
  action: ChangeContainerDropShadowAction
): AppState => {
  return {
    ...state,
    page: {
      ...state.page,
      containers: state.page.containers?.map((container: Container) => {
        // container level change
        if (action.containerId === container.id) {
          return {
            ...container,
            dropShadow: action.dropShadow,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
