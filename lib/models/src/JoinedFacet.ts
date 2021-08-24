import {JoinedDataset} from "./JoinedDataset";
import {FacetType} from "./FacetType";
import {Facet} from "./Facet";

export abstract class JoinedFacet implements Facet {
  protected constructor(protected readonly joinedDataset: JoinedDataset) {}

  abstract readonly type: FacetType;
}
