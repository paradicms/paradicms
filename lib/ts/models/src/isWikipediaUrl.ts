export const isWikipediaUrl = (url: string): boolean =>
  !!url.match(/^https?:\/\/([a-z]+)\.wikipedia\.org\/wiki\//);
