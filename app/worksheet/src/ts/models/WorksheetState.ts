import {InferType} from "yup";
import {worksheetStateJsonSchema} from "~/models/jsonSchemas/worksheetStateJsonSchema";

export type WorksheetState = InferType<typeof worksheetStateJsonSchema>;
