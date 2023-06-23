import {Agent} from "./Agent";
import {SameAsMixin} from "./SameAsMixin";

export interface Person extends Agent, SameAsMixin {
  readonly familyName: string | null;
  readonly givenName: string | null;
  readonly type: "Person";
}
