import * as React from "react";

export const Gallery: React.FunctionComponent<{
  cards: readonly {
    element: React.ReactElement;
    key: string;
  }[];
}> = ({cards}) => (
  <>
    {cards.map(card => (
      <div
        key={card.key}
        style={{
          marginLeft: "20px",
          marginBottom: "20px",
          width: "400px",
        }}
      >
        {card.element}
      </div>
    ))}
  </>
);
