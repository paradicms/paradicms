import {Agent} from "@paradicms/models";
import * as React from "react";
import {Gallery} from "./Gallery";
import {GalleryCard} from "./GalleryCard";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

const AgentsGalleryCard: React.FunctionComponent<{
  agent: Agent;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  role?: string;
}> = ({agent, getAbsoluteImageSrc}) => {
  return (
    <GalleryCard
      getAbsoluteImageSrc={getAbsoluteImageSrc}
      thumbnail={agent.thumbnail(galleryThumbnailSelector)}
      title={agent.label}
    />
  );
};

export const AgentsGallery: React.FunctionComponent<{
  agents: readonly Agent[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
}> = ({agents, getAbsoluteImageSrc}) => (
  <Gallery
    cards={agents.map((agent, agentI) => ({
      element: (
        <AgentsGalleryCard
          agent={agent}
          getAbsoluteImageSrc={getAbsoluteImageSrc}
        />
      ),
      key: agentI,
    }))}
  />
);
