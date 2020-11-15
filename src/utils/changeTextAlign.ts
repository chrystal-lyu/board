import {
  AppState,
  Container,
  Component,
  ChangeTextAlignAction,
} from "../store/actions/app.types";

export const changeTextAlign= (
  state: AppState,
  action: ChangeTextAlignAction
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
                  textAlign: action.align,
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
            textAlign: action.align,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
