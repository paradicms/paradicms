import {Image, JoinedImage} from "@paradicms/models";
import {joinRights} from "./joinRights";

export const joinImage = (kwds: {
  image: Image;
  licenseTitlesByUri: {[index: string]: string};
  rightsStatementPrefLabelsByUri: {[index: string]: string};
}): JoinedImage => {
  const {image} = kwds;
  return {
    ...image,
    rights: image.rights ? joinRights({...kwds, rights: image.rights!}) : null,
  };
};
