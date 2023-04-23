import {Agent} from "./Agent";

export interface Organization extends Agent {
  readonly type: "Organization";
}
