import {InferType} from "yup";
import {userJsonSchema} from "~/models/json/userJsonSchema";

export type UserJson = InferType<typeof userJsonSchema>;
