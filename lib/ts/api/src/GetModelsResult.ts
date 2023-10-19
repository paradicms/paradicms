import {ModelSet} from "@paradicms/models";
import {GetModelKeysResult} from "./GetModelIrisResult";

export interface GetModelsResult extends GetModelKeysResult {
  readonly modelSet: ModelSet;
}
