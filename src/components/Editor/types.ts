export interface OwnProps {
  title?: string;
  isShowing?: boolean;
  hide(e: React.MouseEvent): void;
  textContent?: string;
  options?: string;
  backgroundColor?: string;
  width?: string;
}
