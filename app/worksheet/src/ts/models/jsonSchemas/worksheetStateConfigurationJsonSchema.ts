import * as yup from "yup";
import {googleSheetsWorksheetStateConfigurationJsonSchema} from "~/models/jsonSchemas/googleSheetsWorksheetStateConfigurationJsonSchema";
import {localStorageWorksheetStateConfigurationJsonSchema} from "~/models/jsonSchemas/localStorageWorksheetStateConfigurationJsonSchema";

export const worksheetStateConfigurationJsonSchema = yup.object({
  googleSheets: googleSheetsWorksheetStateConfigurationJsonSchema.nullable(),
  localStorage: localStorageWorksheetStateConfigurationJsonSchema,
});
