import { ChangeTextColorAction } from "../../../store/actions/app.types";

export interface OwnProps {
  content?: string;
  size?: number;
  color?: string;
  handleChange?(
    e: React.ChangeEvent<HTMLInputElement>
  ): ChangeTextColorAction;
  handlePickerChange(value: string): ChangeTextColorAction;
  font?: string;
  weight?: number;
  height?: number;
  spacing?: number;
  margin?: number;
  transform?: string;
  align?: string;
}
