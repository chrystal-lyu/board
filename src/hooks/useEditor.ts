import React, { useState } from "react";

const useEditor = (): [boolean, (e: React.MouseEvent) => void] => {
  const [isShowing, setIsShowing] = useState(false);
  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShowing(!isShowing);
  };
  return [isShowing, toggle];
};

export default useEditor;
