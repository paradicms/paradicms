import * as React from "react";

export const getNamedModelLinks = (kwds: {
  readonly homepage?: string | null;
  readonly wikidataConceptIri: string | null;
  readonly wikipediaUrl: string | null;
}): React.ReactElement[] => {
  const {homepage, wikidataConceptIri, wikipediaUrl} = kwds;

  const links: React.ReactElement[] = [];

  for (const link of [
    {
      href: homepage,
      text: "Home page",
    },
    {
      href: wikidataConceptIri,
      text: "Wikidata",
    },
    {
      href: wikipediaUrl,
      text: "Wikipedia",
    },
  ]) {
    if (!link.href) {
      continue;
    }
    if (links.length > 0) {
      links.push(<span key={links.length}>&nbsp;&bull;&nbsp;</span>);
    }
    links.push(
      <a href={link.href} key={links.length}>
        {link.text}
      </a>
    );
  }

  return links;
};
