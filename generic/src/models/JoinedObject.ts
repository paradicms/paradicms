import {Image} from "~/models/Image";
import {ObjectJson} from "~/graphql/types";
import {Collection} from "~/models/Collection";
import {Institution} from "~/models/Institution";

export interface JoinedObject
  extends Pick<ObjectJson, "properties" | "rights" | "title" | "uri"> {
  readonly collections: readonly Collection[];
  readonly images: readonly Image[];
  readonly institution: Institution;
}
