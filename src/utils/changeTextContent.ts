import {
  AppState,
  Container,
  Component,
  ChangeTextContentAction,
} from "../store/actions/app.types";

export const changeTextContent = (
  state: AppState,
  action: ChangeTextContentAction
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
                  content: action.content,
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
            content: action.content,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
