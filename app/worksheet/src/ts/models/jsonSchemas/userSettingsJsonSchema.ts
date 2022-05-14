import * as yup from "yup";
import {worksheetConfigurationJsonSchema} from "~/models/jsonSchemas/worksheetConfigurationJsonSchema";

export const userSettingsJsonSchema = yup.object({
  worksheetConfiguration: worksheetConfigurationJsonSchema,
});
