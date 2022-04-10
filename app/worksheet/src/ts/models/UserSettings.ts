import {InferType} from "yup";
import {userSettingsJsonSchema} from "~/models/jsonSchemas/userSettingsJsonSchema";

export type UserSettings = InferType<typeof userSettingsJsonSchema>;
