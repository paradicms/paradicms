import {InferType} from "yup";
import {googleSheetsWorksheetStateConfigurationJsonSchema} from "~/models/json/googleSheetsWorksheetStateConfigurationJsonSchema";

export type GoogleSheetsWorksheetStateConfigurationJson = InferType<
  typeof googleSheetsWorksheetStateConfigurationJsonSchema
>;
