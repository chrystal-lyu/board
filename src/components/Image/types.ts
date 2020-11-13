export interface OwnProps {
  id: number | null;
  parentId: number | null;
  src?: string;
  shape?: string;
  scale?: number;
  crop?: {
    topLeft: number[];
    bottomRight: number[];
  };
}
