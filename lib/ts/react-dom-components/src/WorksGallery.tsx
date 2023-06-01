import {Work} from "@paradicms/models";
import * as React from "react";
import {Gallery} from "./Gallery";
import {GalleryCard} from "./GalleryCard";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

const WorksGalleryCard: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderWorkLink: (
    workIri: string,
    children: React.ReactNode
  ) => React.ReactElement;
  work: Work;
}> = ({getAbsoluteImageSrc, renderWorkLink, work}) => (
  <GalleryCard
    getAbsoluteImageSrc={getAbsoluteImageSrc}
    renderLink={children => renderWorkLink(work.iri, children)}
    subtitle={work.displayDate}
    thumbnail={work.thumbnail(galleryThumbnailSelector)}
    title={work.label}
  />
);

/**
 * Works gallery component.
 *
 * @param works current page of works to render in the gallery
 */
export const WorksGallery: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderWorkLink: (
    workIri: string,
    children: React.ReactNode
  ) => React.ReactElement;
  works: readonly Work[];
}> = ({getAbsoluteImageSrc, renderWorkLink, works}) => (
  <Gallery
    cards={works.map(work => ({
      element: (
        <WorksGalleryCard
          getAbsoluteImageSrc={getAbsoluteImageSrc}
          renderWorkLink={renderWorkLink}
          work={work}
        />
      ),
      key: work.iri,
    }))}
  />
);
