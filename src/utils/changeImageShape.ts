import {
  AppState,
  Container,
  Component,
  ChangeImageShapeAction,
} from "../store/actions/app.types";

export const changeImageShape = (
  state: AppState,
  action: ChangeImageShapeAction
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
                  shape: action.shape,
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
            shape: action.shape,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
