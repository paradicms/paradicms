import {Image} from "~/models/image/Image";
import {ObjectJson} from "~/graphql/types";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";

export interface JoinedObject
  extends Pick<ObjectJson, "descriptions" | "rights" | "title" | "uri"> {
  collections: readonly Collection[];
  images: readonly Image[];
  institution: Institution;
}
