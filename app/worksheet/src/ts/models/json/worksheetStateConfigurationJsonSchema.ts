import * as yup from "yup";
import {googleSheetsWorksheetStateConfigurationJsonSchema} from "~/models/json/googleSheetsWorksheetStateConfigurationJsonSchema";
import {localStorageWorksheetStateConfigurationJsonSchema} from "~/models/json/localStorageWorksheetStateConfigurationJsonSchema";

export const worksheetStateConfigurationJsonSchema = yup.object({
  googleSheets: googleSheetsWorksheetStateConfigurationJsonSchema.nullable(),
  localStorage: localStorageWorksheetStateConfigurationJsonSchema,
});
