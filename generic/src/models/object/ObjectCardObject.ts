import {Image} from "~/models/image/Image";

export interface ObjectCardObject
  extends Pick<
    GatsbyTypes.ObjectJson,
    "descriptions" | "rights" | "title" | "uri"
  > {
  collection: Pick<GatsbyTypes.CollectionJson, "title" | "uri">;
  institution: Pick<GatsbyTypes.InstitutionJson, "name" | "uri">;
  thumbnail?: Image;
}
