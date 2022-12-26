import {AppFormShape} from "../models/AppFormShape";
import {AppFormShapeSummary} from "../models/AppFormShapeSummary";

export interface FormShapeApi {
  getFormShape(id: string): Promise<AppFormShape>;

  getFormShapeSummaries(): Promise<readonly AppFormShapeSummary[]>;

  putFormShape(formShape: AppFormShape): Promise<void>;
}
