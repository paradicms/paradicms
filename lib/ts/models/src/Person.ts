import {Agent} from "./Agent";

export interface Person extends Agent {
  readonly familyName: string | null;
  readonly givenName: string | null;
  readonly sortName: string | null;
  readonly type: "Person";
}
