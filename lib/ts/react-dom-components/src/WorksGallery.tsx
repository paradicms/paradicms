import * as React from "react";
import {WorkCard} from "./WorkCard";
import {Work} from "@paradicms/models";

/**
 * Works gallery component.
 *
 * @param works current page of works to render in the gallery
 */
export const WorksGallery: React.FunctionComponent<{
  works: readonly Work[];
  renderInstitutionLink?: (
    institutionUri: string,
    children: React.ReactNode
  ) => React.ReactElement;
  renderWorkLink: (
    workUri: string,
    children: React.ReactNode
  ) => React.ReactElement;
}> = ({works, renderInstitutionLink, renderWorkLink}) => (
  <>
    {works.map(work => (
      <div
        key={work.uri}
        style={{
          marginLeft: "20px",
          marginBottom: "20px",
          width: "400px",
        }}
      >
        <WorkCard
          work={work}
          renderInstitutionLink={renderInstitutionLink}
          renderWorkLink={renderWorkLink}
        />
      </div>
    ))}
  </>
);
