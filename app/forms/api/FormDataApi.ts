import {FormData, FormDataSummary} from "@paradicms/shacl-forms";

export interface FormDataApi {
  getFormData(id: string): Promise<FormData>;

  getFormDataSummaries(): Promise<readonly FormDataSummary[]>;

  putFormData(formData: FormData): Promise<void>;
}
