import * as React from "react";
import {WorkCard} from "./WorkCard";
import {Work} from "@paradicms/models";
import {Gallery} from "./Gallery";

/**
 * Works gallery component.
 *
 * @param works current page of works to render in the gallery
 */
export const WorksGallery: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderWorkLink: (
    workUri: string,
    children: React.ReactNode
  ) => React.ReactElement;
  works: readonly Work[];
}> = ({getAbsoluteImageSrc, renderWorkLink, works}) => (
  <Gallery
    cards={works.map(work => ({
      element: (
        <WorkCard
          getAbsoluteImageSrc={getAbsoluteImageSrc}
          renderWorkLink={renderWorkLink}
          work={work}
        />
      ),
      key: work.uri,
    }))}
  />
);
