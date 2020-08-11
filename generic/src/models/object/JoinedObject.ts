import {Image} from "~/models/image/Image";
import {ObjectJson} from "~/graphql/types";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";

export interface JoinedObject
  extends Pick<ObjectJson, "properties" | "rights" | "title" | "uri"> {
  readonly collections: readonly Collection[];
  readonly images: readonly Image[];
  readonly institution: Institution;
}
