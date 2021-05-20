import {JoinedImage, JoinedRights} from "@paradicms/models";
import {ObjectCardInstitution} from "./ObjectCardInstitution";

export interface ObjectCardObject {
  readonly abstract?: string;
  readonly institution: ObjectCardInstitution;
  readonly rights?: JoinedRights;
  readonly title: string;
  readonly thumbnail?: JoinedImage;
  readonly uri: string;
}
