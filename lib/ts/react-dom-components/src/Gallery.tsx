import * as React from "react";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

export const Gallery: React.FunctionComponent<{
  cards: readonly {
    element: React.ReactElement;
    key: React.Key;
  }[];
}> = ({cards}) => (
  <>
    {cards.map(card => (
      <div
        className="px-0"
        key={card.key}
        style={{
          marginRight: "50px",
          marginBottom: "50px",
          width: galleryThumbnailSelector.targetDimensions.width,
        }}
      >
        {card.element}
      </div>
    ))}
  </>
);
