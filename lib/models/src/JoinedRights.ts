import {JoinedValue} from "./JoinedValue";

export interface JoinedRights {
  creator: JoinedValue | null;
  holder: JoinedValue | null;
  license: JoinedValue | null;
  statement: JoinedValue | null;
}
