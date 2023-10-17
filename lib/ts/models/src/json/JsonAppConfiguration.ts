import {AppConfiguration} from "../AppConfiguration";

export type JsonAppConfiguration = Omit<
  AppConfiguration,
  "iri" | "toJson" | "toRdf"
>;
