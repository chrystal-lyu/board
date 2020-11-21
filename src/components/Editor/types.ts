export interface OwnProps {
  containerId: string | null;
  componentId?: string | null;
  title?: string;
  isShowing?: boolean;
  hide(e: React.MouseEvent): void;
  textContent?: string;
  textColor?: string;
  textFontFamily?: string;
  textSize?: number;
  textWeight?: number;
  textLineHeight?: number;
  textLetterSpacing?: number;
  textMargin?: number;
  textTransform?: string;
  textAlign?: string;
  imageUrl?: string;
  imageShape?: string;
  containerBgColor?: string;
  containerBorderRadius?: number;
  containerDropShadow?: boolean;
}
