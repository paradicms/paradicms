import * as yup from "yup";
import {worksheetFeatureSetStateJsonSchema} from "~/models/json/worksheetFeatureSetStateJsonSchema";

export const worksheetStateJsonSchema = yup.object({
  ctime: yup.date().required(),
  featureSets: yup.array(worksheetFeatureSetStateJsonSchema).required(),
  id: yup.string().required(),
  mtime: yup.date().required(),
  text: yup.string(),
});
