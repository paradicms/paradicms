import * as yup from "yup";
import {currentUserSessionJsonSchema} from "~/models/jsonSchemas/currentUserSessionJsonSchema";
import {userJsonSchema} from "~/models/jsonSchemas/userJsonSchema";
import {userSettingsJsonSchema} from "~/models/jsonSchemas/userSettingsJsonSchema";

export const currentUserJsonSchema = yup.object({
  session: currentUserSessionJsonSchema.required(),
  settings: userSettingsJsonSchema.nullable(),
  user: userJsonSchema.required(),
});
