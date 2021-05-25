import {JoinedImage} from "@paradicms/models";

export interface InstitutionCardInstitution {
  readonly name: string;
  readonly thumbnail: JoinedImage | null;
  readonly uri: string;
}
