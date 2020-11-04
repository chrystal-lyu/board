import React, { useState } from "react";

const useEditor = (): [
  boolean,
  (e: React.MouseEvent) => void,
  (e: React.MouseEvent) => void
] => {
  const [isShowing, setIsShowing] = useState(false);
  const show = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShowing(true);
  };
  const hide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShowing(false);
  };
  return [isShowing, show, hide];
};

export default useEditor;
