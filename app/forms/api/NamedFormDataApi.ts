import {NamedFormData} from "../models/NamedFormData";

export interface NamedFormDataApi {
  getNamedFormData(id: string): Promise<NamedFormData>;

  getNamedFormDataIds(): Promise<readonly string[]>;

  putNamedFormData(namedFormData: NamedFormData): Promise<void>;
}
