import {FormShape, FormShapeSummary} from "@paradicms/shacl-forms";

export interface FormShapeApi {
  getFormShape(id: string): Promise<FormShape>;

  getFormShapeSummaries(): Promise<readonly FormShapeSummary[]>;

  putFormShape(formShape: FormShape): Promise<void>;
}
