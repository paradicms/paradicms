import {Array, Literal, Optional, Static, String} from "runtypes";
import {Filter} from "./Filter";

export const IriFilter = Filter.extend({
  /**
   * Exclude models that have the given IRIs.
   *
   * excludeIris has precedence over includeIris.
   */
  excludeIris: Optional(Array(String).asReadonly()),

  /**
   * Include models that have the given IRIs.
   *
   * Any model that does not have one of these IRIs is implicitly excluded.
   */
  includeIris: Optional(Array(String).asReadonly()),

  type: Literal("Iri"),
}).asReadonly();

export type IriFilter = Static<typeof IriFilter>;
