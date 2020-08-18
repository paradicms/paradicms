import {Image} from "~/models/Image";
import {Collection} from "~/models/Collection";
import {Institution} from "~/models/Institution";
import {Property} from "~/models/Property";
import {Rights} from "~/models/Rights";

export interface JoinedObject {
  readonly collections: readonly Collection[];
  readonly images: readonly Image[];
  readonly institution: Institution;
  readonly properties?: readonly Property[] | null;
  readonly rights?: Rights | null;
  readonly title: string;
  readonly uri: string;
}
