import {ObjectJsonProperties} from "~/graphql/types";

export type ObjectProperty = Pick<ObjectJsonProperties, "key" | "value">;
