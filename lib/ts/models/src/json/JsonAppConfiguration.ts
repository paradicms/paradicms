import {AppConfiguration} from "../AppConfiguration";

export type JsonAppConfiguration = Omit<
  AppConfiguration,
  "key" | "identifiers" | "iris" | "preMemoize" | "toJson" | "toRdf"
>;
