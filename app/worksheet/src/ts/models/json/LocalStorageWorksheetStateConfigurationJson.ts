import {InferType} from "yup";
import {localStorageWorksheetStateConfigurationJsonSchema} from "~/models/json/localStorageWorksheetStateConfigurationJsonSchema";

export type LocalStorageWorksheetStateConfigurationJson = InferType<
  typeof localStorageWorksheetStateConfigurationJsonSchema
>;
