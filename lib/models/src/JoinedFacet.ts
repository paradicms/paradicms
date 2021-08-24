import {JoinedDataset} from "./JoinedDataset";
import {FacetType} from "./FacetType";

export abstract class JoinedFacet {
  protected constructor(protected readonly joinedDataset: JoinedDataset) {}

  abstract readonly type: FacetType;
}
