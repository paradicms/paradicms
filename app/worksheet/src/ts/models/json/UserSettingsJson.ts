import {InferType} from "yup";
import {userSettingsJsonSchema} from "~/models/json/userSettingsJsonSchema";

export type UserSettingsJson = InferType<typeof userSettingsJsonSchema>;
