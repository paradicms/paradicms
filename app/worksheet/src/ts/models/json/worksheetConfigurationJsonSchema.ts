import * as yup from "yup";
import {worksheetStateConfigurationJsonSchema} from "~/models/json/worksheetStateConfigurationJsonSchema";

export const worksheetConfigurationJsonSchema = yup.object({
  state: worksheetStateConfigurationJsonSchema.required(),
});
