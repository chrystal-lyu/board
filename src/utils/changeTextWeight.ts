import {
  AppState,
  Container,
  Component,
  ChangeTextWeightAction,
} from "../store/actions/app.types";

export const changeTextWeight = (
  state: AppState,
  action: ChangeTextWeightAction
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
                  fontWeight: action.weight,
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
            fontWeight: action.weight,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
