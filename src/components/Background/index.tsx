import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BackgroundBox } from "./index.style";
import Editor from "../Editor";
import useEditor from "../../hooks/useEditor";
import { RootState } from "../../store/reducers/rootReducer";

const Background: React.FC = (props) => {
  const [isShowing, show, hide] = useEditor();
  const { background } = useSelector((state: RootState) => state.app);
  const { options } = background.style;
  const theme = {
    background: background.style.config.color,
    colorStop1: background.style.config.colorStop1,
    stopPosition1: background.style.config.stopPosition1,
    colorStop2: background.style.config.colorStop2,
    stopPosition2: background.style.config.stopPosition2,
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundBox
        height="100vh"
        onClick={show}
        className={options === "gradient" ? "gradient" : ""}
      >
        {props.children}
        <Editor
          title="Background"
          isShowing={isShowing}
          hide={hide}
          containerId={null}
        />
      </BackgroundBox>
    </ThemeProvider>
  );
};

export default Background;
