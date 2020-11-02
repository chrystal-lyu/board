interface Color {
  name: "color";
  options: {
    color: string;
  };
}

interface Gradient {
  name: "gradient";
  options: {
    colorStop1: string;
    stopPosition1: number;
    colorStop2: string;
    stopPosition2: number;
  };
}

type Style = Color | Gradient;

export interface OwnProps {
  style?: {
    [key: string]: Style;
  };
}
