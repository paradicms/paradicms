import {InferType} from "yup";
import {worksheetFeatureValueStateJsonSchema} from "~/models/jsonSchemas/worksheetFeatureValueStateJsonSchema";

export type WorksheetFeatureValueState = InferType<
  typeof worksheetFeatureValueStateJsonSchema
>;
