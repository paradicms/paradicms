import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";
import {ContributorsMixin} from "./ContributorsMixin";
import {CreatorsMixin} from "./CreatorsMixin";

export interface RightsMixin extends ContributorsMixin, CreatorsMixin{
  get license(): License | string | null;
  get requiresAttribution(): boolean;
  get rightsHolderAgents(): readonly Agent[];
  get rightsHolderAgentUris(): readonly string[];
  get rightsHolders(): readonly (Agent | string)[];
  get rightsStatement(): RightsStatement | string | null;
}
