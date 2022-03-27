import {readBootstrapCollectionAppConfiguration} from "./readBootstrapCollectionAppConfiguration";
import {Parser, Store} from "n3";

const ttl = `
@prefix configuration: <http://www.paradicms.org/ns/configuration#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

[] a configuration:AppConfiguration;
  configuration:workProperty [
    configuration:filterable true ;
    dcterms:title "Creator" ;
    rdf:predicate dcterms:creator
  ]
  .
`;

export const defaultBootstrapCollectionAppConfiguration = readBootstrapCollectionAppConfiguration(
  new Store(new Parser().parse(ttl)),
  new Store()
)!;
