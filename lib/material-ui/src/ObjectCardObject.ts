import {JoinedImage, JoinedRights} from "@paradicms/models";
import {ObjectCardInstitution} from "./ObjectCardInstitution";

export interface ObjectCardObject {
  readonly abstract: string | null;
  readonly institution: ObjectCardInstitution;
  readonly rights: JoinedRights | null;
  readonly title: string;
  readonly thumbnail: JoinedImage | null;
  readonly uri: string;
}
