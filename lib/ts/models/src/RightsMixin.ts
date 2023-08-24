import { Agent } from "./Agent";
import { ContributorsMixin } from "./ContributorsMixin";
import { CreatorsMixin } from "./CreatorsMixin";
import { License } from "./License";
import { RightsStatement } from "./RightsStatement";

export interface RightsMixin extends ContributorsMixin, CreatorsMixin {
  get licenses(): readonly License[];
  get requiresAttribution(): boolean;
  get rightsHolders(): readonly Agent[];
  get rightsStatements(): readonly RightsStatement[];
}
