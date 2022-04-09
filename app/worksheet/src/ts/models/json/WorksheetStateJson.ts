import {InferType} from "yup";
import {worksheetStateJsonSchema} from "~/models/json/worksheetStateJsonSchema";

export type WorksheetStateJson = InferType<typeof worksheetStateJsonSchema>;
