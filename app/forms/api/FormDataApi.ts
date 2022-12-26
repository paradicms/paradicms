import {AppFormData} from "../models/AppFormData";
import {AppFormDataSummary} from "../models/AppFormDataSummary";

export interface FormDataApi {
  getFormData(id: string): Promise<AppFormData>;

  getFormDataSummaries(): Promise<readonly AppFormDataSummary[]>;

  putFormData(formData: AppFormData): Promise<void>;
}
