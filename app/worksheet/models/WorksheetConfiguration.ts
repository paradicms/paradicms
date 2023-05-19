import {InferType} from "yup";
import {worksheetConfigurationJsonSchema} from "~/models/jsonSchemas/worksheetConfigurationJsonSchema";

export type WorksheetConfiguration = InferType<
  typeof worksheetConfigurationJsonSchema
>;
