import {createDataset, parseIntoDataset} from "@paradicms/rdf";
import {readMultiPageExhibitionAppConfiguration} from "./readMultiPageExhibitionAppConfiguration";

const ttl = `
@prefix : <http://www.paradicms.org/ns/configuration#> .

[] a :AppConfiguration .
`;

export const defaultMultiPageExhibitionAppConfiguration = readMultiPageExhibitionAppConfiguration(
  parseIntoDataset(ttl),
  createDataset()
)!;
