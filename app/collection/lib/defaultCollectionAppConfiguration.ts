import {readCollectionAppConfiguration} from "./readCollectionAppConfiguration";
import {createDataset, parseIntoDataset} from "@paradicms/rdf";

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
  ;
  configuration:workProperty [
    configuration:hidden true ;
    configuration:searchable true ;
    dcterms:title "Description" ;
    rdf:predicate dcterms:description
  ]
  ;
  configuration:workProperty [
    configuration:filterable true ;
    dcterms:title "Medium" ;
    rdf:predicate dcterms:medium
  ]
  ;
  configuration:workProperty [
    configuration:filterable true ;
    dcterms:title "Subject" ;
    rdf:predicate dcterms:subject
  ]
  ;
  configuration:workProperty [
    configuration:hidden true ;
    configuration:searchable true ;
    dcterms:title "Title" ;
    rdf:predicate dcterms:title
  ]
  ;
  configuration:workProperty [
    configuration:filterable true ;
    dcterms:title "Type" ;
    rdf:predicate dcterms:type
  ]
  .
`;

export const defaultCollectionAppConfiguration = readCollectionAppConfiguration(
  parseIntoDataset(ttl),
  createDataset()
)!;
