import * as yup from "yup";
import {worksheetFeatureValueStateJsonSchema} from "~/models/json/worksheetFeatureValueStateJsonSchema";

export const worksheetFeatureStateJsonSchema = yup.object({
  text: yup.string(),
  uri: yup.string().required(),
  values: yup.array(worksheetFeatureValueStateJsonSchema),
});
