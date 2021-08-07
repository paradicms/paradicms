import * as React from "react";
import {ObjectCard} from "./ObjectCard";
import {JoinedInstitution, JoinedObject} from "@paradicms/models";

/**
 * Objects gallery component.
 *
 * @param objects current page of objects to render in the gallery
 */
export const ObjectsGallery: React.FunctionComponent<{
  objects: readonly JoinedObject[];
  renderInstitutionLink?: (
    institution: JoinedInstitution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({objects, renderInstitutionLink, renderObjectLink}) => (
  <>
    {objects.map(object => (
      <div className="object-card-container" key={object.uri}>
        <ObjectCard
          object={object}
          renderInstitutionLink={renderInstitutionLink}
          renderObjectLink={renderObjectLink}
        />
      </div>
    ))}
  </>
);
