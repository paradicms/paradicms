import {InferType} from "yup";
import {worksheetFeatureStateJsonSchema} from "~/models/jsonSchemas/worksheetFeatureStateJsonSchema";

export type WorksheetFeatureState = InferType<
  typeof worksheetFeatureStateJsonSchema
>;
