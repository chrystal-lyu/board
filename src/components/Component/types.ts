export interface OwnProps {
  id: number;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}
