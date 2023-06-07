import {Model} from "../Model";

export abstract class SameAsModelMixin<ModelT extends Model> {
  protected abstract getBestLinkedModel<LinkedModelT extends Model>(
    getLinkedModel: (model: ModelT) => LinkedModelT | null
  ): LinkedModelT | null;

  protected abstract getBestValue<T>(
    getValue: (model: ModelT) => T | null
  ): T | null;

  protected abstract getUniqueLinkedModels<LinkedModelT extends Model>(
    getLinkedModels: (model: ModelT) => readonly LinkedModelT[]
  ): readonly LinkedModelT[];

  protected abstract readonly models: readonly ModelT[];
}
