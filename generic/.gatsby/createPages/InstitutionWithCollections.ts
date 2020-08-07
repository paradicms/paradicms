import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";

export interface InstitutionWithCollections {
  collections: readonly Collection[];
  institution: Institution;
}
