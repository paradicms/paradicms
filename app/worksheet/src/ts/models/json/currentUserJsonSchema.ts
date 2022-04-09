import * as yup from "yup";
import {currentUserSessionJsonSchema} from "~/models/json/currentUserSessionJsonSchema";
import {userJsonSchema} from "~/models/json/userJsonSchema";
import {userSettingsJsonSchema} from "~/models/json/userSettingsJsonSchema";

export const currentUserJsonSchema = yup.object({
  session: currentUserSessionJsonSchema.required(),
  settings: userSettingsJsonSchema.nullable(),
  user: userJsonSchema.required(),
});
