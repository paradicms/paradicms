import {InferType} from "yup";
import {worksheetFeatureValueStateJsonSchema} from "~/models/json/worksheetFeatureValueStateJsonSchema";

export type WorksheetFeatureValueStateJson = InferType<
  typeof worksheetFeatureValueStateJsonSchema
>;
