import {Agent} from "./Agent";
import {SameAsMixin} from "./SameAsMixin";

export interface Person extends Agent, SameAsMixin<Person> {
  readonly familyName: string | null;
  readonly givenName: string | null;
  readonly sortName: string | null;
  readonly type: "Person";
}
