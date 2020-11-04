interface Color {
  color?: string;
}

interface Gradient {
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
}

export interface OwnProps {
  options: string;
  background?: string;
  config?: Color | Gradient;
}
