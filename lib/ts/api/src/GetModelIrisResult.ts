import {Array, Number, Record, Static, String} from "runtypes";

export const GetModelKeysResult = Record({
  modelIris: Array(String).asReadonly(),
  totalModelsCount: Number,
});

export type GetModelKeysResult = Static<typeof GetModelKeysResult>;
