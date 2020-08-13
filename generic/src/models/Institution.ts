import {InstitutionJson} from "~/graphql/types";

export type Institution = Pick<InstitutionJson, "name" | "rights" | "uri">;
