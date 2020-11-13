export interface OwnProps {
  containerId?: number;
  componentId?: number;
  title?: string;
  isShowing?: boolean;
  hide(e: React.MouseEvent): void;
  textContent?: string;
  textSize?: number;
  imageUrl?: string;
}
