import {InferType} from "yup";
import {worksheetFeatureStateJsonSchema} from "~/models/json/worksheetFeatureStateJsonSchema";

export type WorksheetFeatureStateJson = InferType<
  typeof worksheetFeatureStateJsonSchema
>;
