import * as yup from "yup";
import {worksheetFeatureStateJsonSchema} from "~/models/json/worksheetFeatureStateJsonSchema";

export const worksheetFeatureSetStateJsonSchema = yup.object({
  features: yup.array(worksheetFeatureStateJsonSchema),
  uri: yup.string().required(),
});
