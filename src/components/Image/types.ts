export interface OwnProps {
  id: number | null;
  parentId: number | null;
  url?: string;
  shape?: string;
  scale?: number;
  crop?: {
    topLeft: number[];
    bottomRight: number[];
  };
}
