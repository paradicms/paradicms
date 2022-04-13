import * as yup from "yup";
import {currentUserSessionJsonSchema} from "~/models/jsonSchemas/currentUserSessionJsonSchema";
import {userJsonSchema} from "~/models/jsonSchemas/userJsonSchema";

export const currentUserJsonSchema = yup.object({
  session: currentUserSessionJsonSchema.required(),
  user: userJsonSchema.required(),
});
