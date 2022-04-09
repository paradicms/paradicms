import {InferType} from "yup";
import {worksheetConfigurationJsonSchema} from "~/models/json/worksheetConfigurationJsonSchema";

export type WorksheetConfigurationJson = InferType<
  typeof worksheetConfigurationJsonSchema
>;
