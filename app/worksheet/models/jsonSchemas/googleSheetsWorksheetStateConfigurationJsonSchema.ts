import * as yup from "yup";

export const googleSheetsWorksheetStateConfigurationJsonSchema = yup.object({
  spreadsheetId: yup.string().required(),
});
