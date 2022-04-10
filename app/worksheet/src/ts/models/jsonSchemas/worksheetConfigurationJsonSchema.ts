import * as yup from "yup";
import {worksheetStateConfigurationJsonSchema} from "~/models/jsonSchemas/worksheetStateConfigurationJsonSchema";

export const worksheetConfigurationJsonSchema = yup.object({
  state: worksheetStateConfigurationJsonSchema.required(),
});
