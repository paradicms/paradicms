import {InferType} from "yup";
import {userJsonSchema} from "~/models/jsonSchemas/userJsonSchema";

export type User = InferType<typeof userJsonSchema>;
