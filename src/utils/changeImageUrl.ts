import {
  AppState,
  Container,
  Component,
  ChangeImageUrlAction,
} from "../store/actions/app.types";

export const changeImageUrl = (
  state: AppState,
  action: ChangeImageUrlAction
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
                  url: action.url,
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
            url: action.url,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
