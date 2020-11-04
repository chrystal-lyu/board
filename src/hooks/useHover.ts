import React, { useState } from "react";

const useHover = (): [
  boolean,
  (e: React.MouseEvent) => void,
  (e: React.MouseEvent) => void
] => {
  const [hovered, setHovered] = useState(false);
  const addHover = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHovered(true);
  };
  const removeHover = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHovered(false);
  };
  return [hovered, addHover, removeHover];
};

export default useHover;
