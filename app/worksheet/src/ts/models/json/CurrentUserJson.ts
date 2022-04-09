import {InferType} from "yup";
import {currentUserJsonSchema} from "~/models/json/currentUserJsonSchema";

export type CurrentUserJson = InferType<typeof currentUserJsonSchema>;
