import {
  AppState,
  Container,
  Component,
  ChangeTextColorAction,
} from "../store/actions/app.types";

export const changeTextColor = (
  state: AppState,
  action: ChangeTextColorAction
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
                  color: action.color,
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
            color: action.color,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
