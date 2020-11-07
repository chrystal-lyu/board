export const selectorBoxClass = (
  isShowing: boolean,
  hovered: boolean
): string => {
  if (isShowing) {
    return "active";
  }
  if (hovered) {
    return "hover";
  }
  return "";
};
