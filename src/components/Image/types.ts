export interface OwnProps {
  id: string | null;
  parentId: string | null;
  url?: string;
  shape?: string;
  scale?: number;
  crop?: {
    topLeft: number[];
    bottomRight: number[];
  };
}
