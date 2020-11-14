import {
  AppState,
  Container,
  ChangeContainerBackgroundAction,
} from "../store/actions/app.types";

export const changeContainerBackground = (
  state: AppState,
  action: ChangeContainerBackgroundAction
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
            backgroundColor: action.color,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
