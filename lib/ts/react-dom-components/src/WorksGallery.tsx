import * as React from "react";
import {Work} from "@paradicms/models";
import {Gallery} from "./Gallery";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {GalleryCard} from "./GalleryCard";

const WorksGalleryCard: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderWorkLink: (
    workUri: string,
    children: React.ReactNode
  ) => React.ReactElement;
  work: Work;
}> = ({getAbsoluteImageSrc, renderWorkLink, work}) => (
  <GalleryCard
    getAbsoluteImageSrc={getAbsoluteImageSrc}
    thumbnail={work.thumbnail(galleryThumbnailSelector)}
    subtitle={work.displayDate}
    title={renderWorkLink(work.uri, <>{work.title}</>)}
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
    workUri: string,
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
      key: work.uri,
    }))}
  />
);
