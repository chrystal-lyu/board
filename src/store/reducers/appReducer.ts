import sample from "../../sample.json";
import produce from "immer";
import { v4 as uuidv4 } from "uuid";
import update from "immutability-helper";
import {
  CHANGE_MAIN_BACKGROUND,
  CHANGE_COLOR_STOP_1,
  CHANGE_STOP_POSITION_1,
  CHANGE_COLOR_STOP_2,
  CHANGE_STOP_POSITION_2,
  CHANGE_MAIN_BACKGROUND_STYLE,
  CHANGE_PAGE_WIDTH,
  CHANGE_CONTAINER_BACKGROUND,
  CHANGE_CONTAINER_BORDER_RADIUS,
  CHANGE_CONTAINER_DROP_SHADOW,
  CHANGE_TEXT_CONTENT,
  CHANGE_TEXT_COLOR,
  CHANGE_TEXT_SIZE,
  CHANGE_TEXT_FONT,
  CHANGE_TEXT_WEIGHT,
  CHANGE_TEXT_HEIGHT,
  CHANGE_TEXT_SPACING,
  CHANGE_TEXT_MARGIN,
  CHANGE_TEXT_TRANSFORM,
  CHANGE_TEXT_ALIGN,
  CHANGE_IMAGE_URL,
  CHANGE_IMAGE_SHAPE,
  REMOVE_CONTAINER,
  ADD_CONTAINER,
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  REORDER_COMPONENT,
  ChangeMainBgAction,
  ChangeColorStop1Action,
  ChangeColorStop2Action,
  ChangeStopPosition1Action,
  ChangeStopPosition2Action,
  ChangeMainBgStyleAction,
  ChangePageWidthAction,
  ChangeContainerBackgroundAction,
  ChangeContainerDropShadowAction,
  ChangeContainerBorderRadiusAction,
  ChangeTextContentAction,
  ChangeTextColorAction,
  ChangeTextSizeAction,
  ChangeTextFontAction,
  ChangeTextWeightAction,
  ChangeTextHeightAction,
  ChangeTextSpacingAction,
  ChangeTextMarginAction,
  ChangeTextTransformAction,
  ChangeTextAlignAction,
  ChangeImageUrlAction,
  ChangeImageShapeAction,
  RemoveContainerAction,
  AddContainerAction,
  RemoveComponentAction,
  AddComponentAction,
  ReorderComponentAction,
  AppState,
  Container,
} from "../actions/app.types";
import {
  changeImageUrl,
  changeImageShape,
  changeTextContent,
  changeTextColor,
  changeTextSize,
  changeTextFont,
  changeContainerBackground,
  changeContainerBorderRadius,
  changeContainerDropShadow,
  changeTextWeight,
  changeTextHeight,
  changeTextSpacing,
  changeTextMargin,
  changeTextTransform,
  changeTextAlign,
} from "../../utils";

const initialState: AppState = sample;

const appReducer = (
  state = initialState,
  action:
    | ChangeMainBgAction
    | ChangeColorStop1Action
    | ChangeStopPosition1Action
    | ChangeColorStop2Action
    | ChangeStopPosition2Action
    | ChangeMainBgStyleAction
    | ChangePageWidthAction
    | ChangeContainerBackgroundAction
    | ChangeContainerBorderRadiusAction
    | ChangeContainerDropShadowAction
    | ChangeTextContentAction
    | ChangeTextColorAction
    | ChangeTextSizeAction
    | ChangeTextFontAction
    | ChangeTextWeightAction
    | ChangeTextHeightAction
    | ChangeTextSpacingAction
    | ChangeTextMarginAction
    | ChangeTextTransformAction
    | ChangeTextAlignAction
    | ChangeImageUrlAction
    | ChangeImageShapeAction
    | RemoveContainerAction
    | AddContainerAction
    | RemoveComponentAction
    | AddComponentAction
    | ReorderComponentAction
): AppState => {
  switch (action.type) {
    case CHANGE_MAIN_BACKGROUND:
      return produce(state, (draft) => {
        draft.background.style.config.color = action.payload;
      });
    case CHANGE_COLOR_STOP_1:
      return produce(state, (draft) => {
        draft.background.style.config.colorStop1 = action.payload;
      });
    case CHANGE_STOP_POSITION_1:
      return produce(state, (draft) => {
        draft.background.style.config.stopPosition1 = action.payload;
      });
    case CHANGE_COLOR_STOP_2:
      return produce(state, (draft) => {
        draft.background.style.config.colorStop2 = action.payload;
      });
    case CHANGE_STOP_POSITION_2:
      return produce(state, (draft) => {
        draft.background.style.config.stopPosition2 = action.payload;
      });
    case CHANGE_MAIN_BACKGROUND_STYLE:
      return produce(state, (draft) => {
        draft.background.style.options = action.payload;
      });
    case CHANGE_PAGE_WIDTH:
      return produce(state, (draft) => {
        draft.page.width = action.payload;
      });
    case CHANGE_CONTAINER_BACKGROUND:
      return changeContainerBackground(state, action);
    case CHANGE_CONTAINER_BORDER_RADIUS:
      return changeContainerBorderRadius(state, action);
    case CHANGE_CONTAINER_DROP_SHADOW:
      return changeContainerDropShadow(state, action);
    case CHANGE_TEXT_CONTENT:
      return changeTextContent(state, action);
    case CHANGE_TEXT_COLOR:
      return changeTextColor(state, action);
    case CHANGE_TEXT_SIZE:
      return changeTextSize(state, action);
    case CHANGE_TEXT_FONT:
      return changeTextFont(state, action);
    case CHANGE_TEXT_WEIGHT:
      return changeTextWeight(state, action);
    case CHANGE_TEXT_HEIGHT:
      return changeTextHeight(state, action);
    case CHANGE_TEXT_SPACING:
      return changeTextSpacing(state, action);
    case CHANGE_TEXT_MARGIN:
      return changeTextMargin(state, action);
    case CHANGE_TEXT_TRANSFORM:
      return changeTextTransform(state, action);
    case CHANGE_TEXT_ALIGN:
      return changeTextAlign(state, action);
    case CHANGE_IMAGE_URL:
      return changeImageUrl(state, action);
    case CHANGE_IMAGE_SHAPE:
      return changeImageShape(state, action);
    case REMOVE_CONTAINER:
      return produce(state, (draft) => {
        draft.page.containers = draft.page.containers.filter(
          (item) => item.id !== action.containerId
        );
      });
    case ADD_CONTAINER:
      const itemId = uuidv4();
      return produce(state, (draft) => {
        const newContainer = {
          id: itemId,
          type: "container",
          backgroundColor: "#ffffff",
          borderRadius: 16,
          dropShadow: false,
          components: [],
        };
        const newText = {
          id: itemId,
          type: "text",
          content: "I am a text",
          color: "black",
          fontFamily: "georgia",
          fontSize: 24,
          fontWeight: 600,
          lineHeight: 28,
          letterSpacing: 0,
          margin: 10,
          textTransform: "unset",
          textAlign: "auto",
        };
        const newImage = {
          id: itemId,
          type: "image",
          url: "https://deadline.com/wp-content/uploads/2019/08/mulan.jpg",
          shape: "circle",
          scale: 1,
          crop: {
            topLeft: [0, 0],
            bottomRight: [200, 200],
          },
        };
        if (action.containerType === "Container") {
          draft.page.containers.push(newContainer);
        } else if (action.containerType === "Text") {
          draft.page.containers.push(newText);
        } else if (action.containerType === "Image") {
          draft.page.containers.push(newImage);
        }
      });
    case REMOVE_COMPONENT:
      const data = state.page.containers;
      const containerIndex = data.findIndex(
        ({ id }) => id === action.containerId
      );
      if (containerIndex === -1) {
        return state;
      }
      const container = data[containerIndex];
      const updatedContainer = {
        ...container,
        components: container.components?.filter(
          (component) => component.id !== action.componentId
        ),
      };
      return {
        ...state,
        page: {
          ...state.page,
          containers: [
            ...state.page.containers.slice(0, containerIndex),
            updatedContainer,
            ...state.page.containers.slice(containerIndex + 1),
          ],
        },
      };
    case ADD_COMPONENT:
      const compId = uuidv4();
      return produce(state, (draft) => {
        const newContainer = {
          id: compId,
          type: "container",
          backgroundColor: "#ffffff",
          borderRadius: 16,
          dropShadow: false,
          components: [],
        };
        const newText = {
          id: compId,
          type: "text",
          content: "I am a text",
          color: "black",
          fontFamily: "georgia",
          fontSize: 24,
          fontWeight: 600,
          lineHeight: 28,
          letterSpacing: 0,
          margin: 10,
          textTransform: "unset",
          textAlign: "auto",
        };
        const newImage = {
          id: compId,
          type: "image",
          url: "https://deadline.com/wp-content/uploads/2019/08/mulan.jpg",
          shape: "circle",
          scale: 1,
          crop: {
            topLeft: [0, 0],
            bottomRight: [200, 200],
          },
        };
        const index = draft.page.containers.findIndex(
          (container) => container.id === action.containerId
        );
        if (action.componentType === "Container") {
          draft.page.containers[index].components?.push(newContainer);
        } else if (action.componentType === "Text") {
          draft.page.containers[index].components?.push(newText);
        } else if (action.componentType === "Image") {
          draft.page.containers[index].components?.push(newImage);
        }
      });
    case REORDER_COMPONENT:
      return {
        ...state,
        page: {
          ...state.page,
          containers: state.page.containers?.map((container: Container) => {
            // container level change
            if (
              action.containerId === container.id &&
              container.components !== undefined
            ) {
              const dragCard = container.components[action.dragIndex];
              return {
                ...container,
                components: update(container.components, {
                  $splice: [
                    [action.dragIndex, 1],
                    [action.hoverIndex, 0, dragCard],
                  ],
                }),
              };
            }
            // default return
            return container;
          }),
        },
      };
    default:
      return state;
  }
};

export default appReducer;
