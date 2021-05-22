import {JoinedImage, JoinedRights} from "@paradicms/models";
import {ObjectCardInstitution} from "./ObjectCardInstitution";

export interface ObjectCardObject {
  readonly abstract: string | null;
  readonly institution: ObjectCardInstitution;
  readonly rights: JoinedRights | null;
  readonly thumbnail: JoinedImage | null;
  readonly title: string;
  readonly uri: string;
}
