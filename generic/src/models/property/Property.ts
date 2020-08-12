import {ObjectJsonProperties} from "~/graphql/types";

export type Property = Pick<ObjectJsonProperties, "key" | "value">;
