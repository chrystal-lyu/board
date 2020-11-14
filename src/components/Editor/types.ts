export interface OwnProps {
  containerId: number | null;
  componentId?: number | null;
  title?: string;
  isShowing?: boolean;
  hide(e: React.MouseEvent): void;
  textContent?: string;
  textSize?: number;
  imageUrl?: string;
  imageShape?: string;
  containerBgColor?: string;
}
