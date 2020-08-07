import {Image} from "~/models/image/Image";
import {CollectionJson, InstitutionJson, ObjectJson} from "~/graphql/types";

export interface ObjectSummary
  extends Pick<ObjectJson, "descriptions" | "rights" | "title" | "uri"> {
  collection: Pick<CollectionJson, "title" | "uri">;
  institution: Pick<InstitutionJson, "name" | "uri">;
  thumbnail?: Image;
}
