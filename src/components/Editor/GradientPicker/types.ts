import {
  ChangeColorStop1Action,
  ChangeStopPosition1Action,
  ChangeColorStop2Action,
  ChangeStopPosition2Action,
} from "../../../store/actions/app.types";

export interface OwnProps {
  colorStop1?: string;
  stopPosition1?: number;
  colorStop2?: string;
  stopPosition2?: number;
  handleChangeColorStop1(
    e: React.ChangeEvent<HTMLInputElement>
  ): ChangeColorStop1Action;
  handleChangeStopPosition1(
    value: number | number[]
  ): ChangeStopPosition1Action;
  handleChangeColorStop2(
    e: React.ChangeEvent<HTMLInputElement>
  ): ChangeColorStop2Action;
  handleChangeStopPosition2(
    value: number | number[]
  ): ChangeStopPosition2Action;
}
