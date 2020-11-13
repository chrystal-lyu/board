export interface OwnProps {
  url?: string;
  shape?: string;
  scale?: string;
  crop?: {
    leftTop: number[];
    bottomRight: number[];
  };
}
