import {Agent} from "./Agent";

export interface OtherAgent extends Agent {
  readonly type: "OtherAgent";
}
