import {InferType} from "yup";
import {worksheetStateConfigurationJsonSchema} from "~/models/jsonSchemas/worksheetStateConfigurationJsonSchema";

export type WorksheetStateConfiguration = InferType<
  typeof worksheetStateConfigurationJsonSchema
>;
