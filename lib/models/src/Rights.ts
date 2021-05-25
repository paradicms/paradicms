import {Value} from "Value";

export interface Rights {
  creator: Value | null;
  holder: Value | null;
  license: Value | null;
  statement: Value | null;
}
