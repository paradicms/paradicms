import {Model} from "../Model";
import invariant from "ts-invariant";
import {DatasetCore} from "@rdfjs/types";
import {ModelIdentifier} from "../ModelIdentifier";
import {Memoize} from "typescript-memoize";
import {modelIdentifiersToKey} from "../modelIdentifiersToKey";
import {CmsNamedModel} from "../cms/CmsNamedModel";
import {hasMixin} from "ts-mixer";
import {CmsModel} from "../cms/CmsModel";

const isCmsModel = (model: Model) => {
  return hasMixin(model, CmsModel) || hasMixin(model, CmsNamedModel);
};

export class SameAsModel<ModelT extends Model> implements Model {
  private readonly cmsModels: readonly ModelT[];
  private readonly nonCmsModels: readonly ModelT[];

  constructor(protected readonly models: readonly ModelT[]) {
    invariant(models.length > 1);
    const cmsModels: ModelT[] = [];
    const nonCmsModels: ModelT[] = [];
    for (const model of models) {
      if (isCmsModel(model)) {
        cmsModels.push(model);
      } else {
        nonCmsModels.push(model);
      }
    }
    this.cmsModels = cmsModels;
    this.nonCmsModels = nonCmsModels;
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
        const cmsModels = linkedModels.filter(linkedModel =>
          isCmsModel(linkedModel)
        );
        switch (cmsModels.length) {
          case 0:
            throw new EvalError("incompatible, non-CMS models");
          case 1:
            return cmsModels[0];
          default:
            return cmsModels[0];
          // throw new EvalError("multiple CMS models");
        }
    }
  }

  protected getBestValue<T>(getValue: (model: ModelT) => T | null): T | null {
    // Prefer a non-null value from a CMS model
    for (const models of [this.cmsModels, this.nonCmsModels]) {
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

  @Memoize()
  get key(): string {
    return modelIdentifiersToKey(this.identifiers);
  }

  get iris(): readonly string[] {
    return this.identifiers
      .filter(identifier => identifier.termType === "NamedNode")
      .map(identifier => identifier.value);
  }

  protected get preferredModel(): ModelT {
    return this.models[0];
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