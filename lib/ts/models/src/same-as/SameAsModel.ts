import {Model} from "../Model";
import invariant from "ts-invariant";
import {DatasetCore} from "@rdfjs/types";
import {ModelIdentifier} from "../ModelIdentifier";
import {Memoize} from "typescript-memoize";
import {modelIdentifiersToKey} from "../modelIdentifiersToKey";
import {hasMixin} from "ts-mixer";
import {SchemaModel} from "../schema/SchemaModel";

const isBestModel = (model: Model) => hasMixin(model, SchemaModel);

export class SameAsModel<ModelT extends Model> implements Model {
  private readonly bestModels: readonly ModelT[];
  private readonly otherModels: readonly ModelT[];

  constructor(protected readonly models: readonly ModelT[]) {
    invariant(models.length > 1);
    const bestModels: ModelT[] = [];
    const otherModels: ModelT[] = [];
    for (const model of models) {
      if (isBestModel(model)) {
        bestModels.push(model);
      } else {
        otherModels.push(model);
      }
    }
    this.bestModels = bestModels;
    this.otherModels = otherModels;
  }

  get dependencies(): readonly Model[] {
    return this.getUniqueLinkedModels(model => model.dependencies);
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
    const linkedModelsByKey: {[index: string]: LinkedModelT} = {};
    for (const model of this.models) {
      const linkedModel = getLinkedModel(model);
      if (linkedModel) {
        linkedModelsByKey[linkedModel.key] = linkedModel;
      }
    }
    const linkedModels = Object.values(linkedModelsByKey);
    switch (linkedModels.length) {
      case 0:
        return null;
      case 1:
        return linkedModels[0];
      default:
        const bestModels = linkedModels.filter(linkedModel =>
          isBestModel(linkedModel)
        );
        switch (bestModels.length) {
          case 0:
            throw new EvalError("incompatible, non-CMS models");
          case 1:
            return bestModels[0];
          default:
            return bestModels[0];
          // throw new EvalError("multiple CMS models");
        }
    }
  }

  protected getBestValue<T>(getValue: (model: ModelT) => T | null): T | null {
    // Prefer a non-null value from a CMS model
    for (const models of [this.bestModels, this.otherModels]) {
      for (const model of models) {
        const value = getValue(model);
        if (value !== null) {
          return value;
        }
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
    const linkedModelsByKey: {[index: string]: LinkedModelT} = {};
    for (const model of this.models) {
      for (const linkedModel of getLinkedModels(model)) {
        linkedModelsByKey[linkedModel.key] = linkedModel;
      }
    }
    return Object.values(linkedModelsByKey);
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

  get identifiers(): readonly ModelIdentifier[] {
    return this.models.flatMap(model => model.identifiers);
  }

  get iris(): readonly string[] {
    return this.identifiers.map(identifier => identifier.value);
  }

  @Memoize()
  get key(): string {
    return modelIdentifiersToKey(this.identifiers);
  }

  toRdf(addToDataset: DatasetCore) {
    for (const model of this.models) {
      model.toRdf(addToDataset);
    }
  }

  get sameAsIdentifiers(): readonly ModelIdentifier[] {
    return [];
  }
}
