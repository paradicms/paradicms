import {BlankNode, NamedNode} from "rdf-js";
import {Model} from "../Model";
import invariant from "ts-invariant";
import TermMap from "@rdfjs/term-map";
import {DatasetCore} from "@rdfjs/types";

export class SameAsModel<ModelT extends Model> implements Model {
  constructor(protected readonly models: readonly ModelT[]) {
    invariant(models.length > 0);
  }

  protected getAllValues<T>(
    getValues: (model: ModelT) => readonly T[]
  ): readonly T[] {
    return this.models.flatMap(model => getValues(model));
  }

  /**
   * Get a single linked model, such as a License.
   *
   * If none of the underlying models links to one of those models, return null.
   * If the underlying models link to at most one unique model, return it.
   * Otherwise, throw an exception.
   */
  protected getBestLinkedModel<LinkedModelT extends Model>(
    getLinkedModel: (model: ModelT) => LinkedModelT | null
  ): LinkedModelT | null {
    const linkedModels: TermMap<
      BlankNode | NamedNode,
      LinkedModelT
    > = new TermMap();
    for (const model of this.models) {
      const linkedModel = getLinkedModel(model);
      if (linkedModel) {
        linkedModels.set(linkedModel.identifier, linkedModel);
      }
    }
    switch (linkedModels.size) {
      case 0:
        return null;
      case 1:
        for (const linkedModel of linkedModels.values()) {
          return linkedModel;
        }
        throw new EvalError("should never hit");
      default:
        throw new EvalError("incompatible linked models");
    }
  }

  protected getBestValue<T>(getValue: (model: ModelT) => T | null): T | null {
    for (const model of this.models) {
      const value = getValue(model);
      if (value !== null) {
        return value;
      }
    }
    return null;
  }

  /**
   * Get multiple unique linked models, such as Images.
   */
  protected getUniqueLinkedModels<LinkedModelT extends Model>(
    getLinkedModels: (model: ModelT) => readonly LinkedModelT[]
  ): readonly LinkedModelT[] {
    const linkedModels: TermMap<
      BlankNode | NamedNode,
      LinkedModelT
    > = new TermMap();
    for (const model of this.models) {
      for (const linkedModel of getLinkedModels(model)) {
        linkedModels.set(linkedModel.identifier, linkedModel);
      }
    }
    return [...linkedModels.values()];
  }

  // protected getUniqueValues<T>(
  //   getValues: (model: ModelT) => readonly T[]
  // ): readonly T[] {
  //   const uniqueValues: Set<T> = new Set();
  //   for (const model of this.models) {
  //     for (const value of getValues(model)) {
  //       uniqueValues.add(value);
  //     }
  //   }
  //   return [...uniqueValues];
  // }

  get identifier(): BlankNode | NamedNode {
    return this.preferredModel.identifier;
  }

  get sameAsUris(): readonly string[] {
    return [];
  }

  protected get preferredModel(): ModelT {
    return this.models[0];
  }

  toRdf(addToDataset: DatasetCore) {
    for (const model of this.models) {
      model.toRdf(addToDataset);
    }
  }

  get uri(): string | null {
    switch (this.identifier.termType) {
      case "BlankNode":
        return null;
      case "NamedNode":
        return this.identifier.value;
    }
  }
}
