import {
  AppState,
  Container,
  Component,
  ChangeTextSpacingAction,
} from "../store/actions/app.types";

export const changeTextSpacing = (
  state: AppState,
  action: ChangeTextSpacingAction
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
                  letterSpacing: action.spacing,
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
            letterSpacing: action.spacing,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
