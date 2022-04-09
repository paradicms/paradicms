import {InferType} from "yup";
import {worksheetStateConfigurationJsonSchema} from "~/models/json/worksheetStateConfigurationJsonSchema";

export type WorksheetStateConfigurationJson = InferType<
  typeof worksheetStateConfigurationJsonSchema
>;
