export interface OwnProps {
  title?: string;
  isShowing?: boolean;
  hide(e: React.MouseEvent): void;
  textContent?: string;
  backgroundColor?: string;
  width?: string;
}
