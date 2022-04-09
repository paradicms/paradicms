import {InferType} from "yup";
import {worksheetFeatureSetStateJsonSchema} from "~/models/json/worksheetFeatureSetStateJsonSchema";

export type WorksheetFeatureSetStateJson = InferType<
  typeof worksheetFeatureSetStateJsonSchema
>;
