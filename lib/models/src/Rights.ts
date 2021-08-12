import {PropertyValue} from "./PropertyValue";

export interface Rights {
  creator: PropertyValue | null;
  holder: PropertyValue | null;
  license: PropertyValue | null;
  statement: PropertyValue | null;
}
