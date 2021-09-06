import * as React from "react";
import {ObjectCard} from "./ObjectCard";
import {JoinedInstitution, JoinedObject} from "@paradicms/models";

/**
 * Objects gallery component.
 *
 * @param objects current page of objects to render in the gallery
 */
export const ObjectsGallery: React.FunctionComponent<{
  objects: readonly Object[];
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: Object,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({objects, renderInstitutionLink, renderObjectLink}) => (
  <>
    {objects.map(object => (
      <div
        key={object.uri}
        style={{
          marginLeft: "20px",
          marginBottom: "20px",
          width: "400px",
        }}
      >
        <ObjectCard
          object={object}
          renderInstitutionLink={renderInstitutionLink}
          renderObjectLink={renderObjectLink}
        />
      </div>
    ))}
  </>
);
