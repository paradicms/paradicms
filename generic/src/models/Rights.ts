import {CollectionJsonRights} from "~/graphql/types";

export type Rights = Pick<CollectionJsonRights, "holder" | "statements">;
