import {JsonLd} from "jsonld/jsonld-spec";

export interface MemApiConfiguration {
  readonly modelSetJsonLd: JsonLd;
  readonly type: "mem";
}
