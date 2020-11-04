import { ChangeMainBgAction } from "../../../store/actions/app.types";

export interface OwnProps {
  value: string;
  handleClick(): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): ChangeMainBgAction;
}
