import {
  AppState,
  Container,
  ChangeContainerBorderRadiusAction,
} from "../store/actions/app.types";

export const changeContainerBorderRadius = (
  state: AppState,
  action: ChangeContainerBorderRadiusAction
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
            borderRadius: action.borderRadius,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
