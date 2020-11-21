import {
  ChangeMainBgAction,
  ChangeContainerBackgroundAction,
} from "../../../store/actions/app.types";

export interface OwnProps {
  value?: string;
  handleChange?(
    e: React.ChangeEvent<HTMLInputElement>
  ): ChangeMainBgAction | ChangeContainerBackgroundAction;
  handlePickerChange(
    value: string
  ): ChangeMainBgAction | ChangeContainerBackgroundAction;
}
