import {FacetType} from "./FacetType";
import {Dataset} from "./Dataset";

export abstract class JoinedFacet {
  protected constructor(protected readonly dataset: Dataset) {}

  abstract readonly type: FacetType;
}
