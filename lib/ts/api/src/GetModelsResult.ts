import {ModelSet} from "@paradicms/models";
import {GetModelKeysResult} from "./GetModelKeysResult";

export interface GetModelsResult extends GetModelKeysResult {
  readonly modelSet: ModelSet;
}
