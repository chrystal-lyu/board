import {
  AppState,
  Container,
  Component,
  ChangeTextHeightAction,
} from "../store/actions/app.types";

export const changeTextHeight = (
  state: AppState,
  action: ChangeTextHeightAction
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
                  lineHeight: action.height,
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
            lineHeight: action.height,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
