import { ChangeMainBgAction } from "../../../store/actions/app.types";

export interface OwnProps {
  value?: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): ChangeMainBgAction;
}
