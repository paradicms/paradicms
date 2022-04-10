import * as yup from "yup";
import {worksheetFeatureStateJsonSchema} from "~/models/jsonSchemas/worksheetFeatureStateJsonSchema";

export const worksheetFeatureSetStateJsonSchema = yup.object({
  features: yup.array(worksheetFeatureStateJsonSchema),
  uri: yup.string().required(),
});
