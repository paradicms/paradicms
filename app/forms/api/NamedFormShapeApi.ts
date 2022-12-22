import {NamedFormShape} from "../models/NamedFormShape";

export interface NamedFormShapeApi {
  getNamedFormShape(id: string): Promise<NamedFormShape>;

  getNamedFormShapeIds(): Promise<readonly string[]>;

  putNamedFormShape(namedFormShape: NamedFormShape): Promise<void>;
}
