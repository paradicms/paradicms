import {InferType} from "yup";
import {worksheetFeatureSetStateJsonSchema} from "~/models/jsonSchemas/worksheetFeatureSetStateJsonSchema";

export type WorksheetFeatureSetState = InferType<
  typeof worksheetFeatureSetStateJsonSchema
>;
