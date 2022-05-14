import {InferType} from "yup";
import {googleSheetsWorksheetStateConfigurationJsonSchema} from "~/models/jsonSchemas/googleSheetsWorksheetStateConfigurationJsonSchema";

export type GoogleSheetsWorksheetStateConfiguration = InferType<
  typeof googleSheetsWorksheetStateConfigurationJsonSchema
>;
