import {InferType} from "yup";
import {currentUserSessionJsonSchema} from "~/models/json/currentUserSessionJsonSchema";

export type CurrentUserSessionJson = InferType<
  typeof currentUserSessionJsonSchema
>;
