export const selectorBoxClass = (isShowing: boolean, hovered: boolean) => {
  if (isShowing) {
    return "active";
  }
  if (hovered) {
    return "hover";
  }
};
