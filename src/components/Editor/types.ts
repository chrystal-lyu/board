export interface OwnProps {
  title?: string;
  isShowing?: boolean;
  hide(e: React.MouseEvent): void;
  textContent?: string;
  width?: string;
}
