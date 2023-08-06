import {AppConfiguration} from "../AppConfiguration";

export type JsonAppConfiguration = Omit<
  AppConfiguration,
  "dependencies" | "key" | "identifiers" | "iris" | "toJson" | "toRdf"
>;
