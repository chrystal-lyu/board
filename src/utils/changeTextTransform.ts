import {
  AppState,
  Container,
  Component,
  ChangeTextTransformAction,
} from "../store/actions/app.types";

export const changeTextTransform = (
  state: AppState,
  action: ChangeTextTransformAction
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
                  textTransform: action.transform,
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
            textTransform: action.transform,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
