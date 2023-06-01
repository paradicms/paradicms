import {Model} from "../Model";
import {SameAsModelMixin} from "./SameAsModelMixin";
import {RelationsMixin} from "../RelationsMixin";

export abstract class SameAsRelationsMixin<
  ModelT extends Model & RelationsMixin
> extends SameAsModelMixin<ModelT> implements RelationsMixin {
  get page(): string | null {
    return this.getBestValue(model => model.page);
  }

  get wikidataConceptIri(): string | null {
    return this.getBestValue(model => model.wikidataConceptIri);
  }

  get wikipediaUrl(): string | null {
    return this.getBestValue(model => model.wikipediaUrl);
  }
}
