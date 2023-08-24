import {Agent} from "./Agent";

export interface ContributorsMixin {
  readonly contributors: readonly Agent[];
}
