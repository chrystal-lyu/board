import {
  AppState,
  Container,
  Component,
  ChangeTextMarginAction,
} from "../store/actions/app.types";

export const changeTextMargin = (
  state: AppState,
  action: ChangeTextMarginAction
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
                  margin: action.margin,
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
            margin: action.margin,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
