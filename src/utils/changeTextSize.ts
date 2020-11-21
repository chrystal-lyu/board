import {
  AppState,
  Container,
  Component,
  ChangeTextSizeAction,
} from "../store/actions/app.types";

export const changeTextSize = (
  state: AppState,
  action: ChangeTextSizeAction
): AppState => {
  return {
    ...state,
    page: {
      ...state.page,
      containers: state.page.containers?.map((container: Container) => {
        // component level change
        if (
          action.componentId !== null &&
          action.containerId === container.id
        ) {
          return {
            ...container,
            components: container.components?.map((component: Component) => {
              if (action.componentId === component.id) {
                return {
                  ...component,
                  fontSize: action.size,
                };
              } else {
                return component;
              }
            }),
          };
        }
        // container level change
        if (
          action.componentId === null &&
          action.containerId === container.id
        ) {
          return {
            ...container,
            fontSize: action.size,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
