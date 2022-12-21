import {Form} from "@paradicms/shacl-forms";

export interface FormApi {
  getForm(id: string): Promise<Form>;

  getFormIds(): Promise<readonly string[]>;

  putForm(id: string, form: Form): Promise<void>;
}
