import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { OwnProps } from "./types";
import { XYCoord } from "dnd-core";
import { reorderComponent } from "../../store/actions";

const style = {
  cursor: "move",
};
const ItemTypes = {
  CARD: "card",
};
interface DragItem {
  index: number;
  id: string;
  type: string;
}
const DraggableComponent: React.FC<OwnProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
      const containerId = props.containerId;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      dispatch(reorderComponent(containerId, dragIndex, hoverIndex));

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id: props.id, index: props.index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 1 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {props.children}
    </div>
  );
};

export default DraggableComponent;
