import {
  AppState,
  Container,
  Component,
  ChangeTextFontAction,
} from "../store/actions/app.types";

export const changeTextFont = (
  state: AppState,
  action: ChangeTextFontAction
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
                  fontFamily: action.font,
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
            fontFamily: action.font,
          };
        }
        // default return
        return container;
      }),
    },
  };
};
