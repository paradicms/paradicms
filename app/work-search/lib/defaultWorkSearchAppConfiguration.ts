import {readWorkSearchAppConfiguration} from "./readWorkSearchAppConfiguration";
import {parseIntoDataset} from "@paradicms/rdf";

const ttl = `
@prefix : <http://www.paradicms.org/ns/configuration#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

[] a :AppConfiguration;
  :workProperty [
    :filterable true ;
    :label "Creator" ;
    :predicate dcterms:creator
  ]
  ;
  :workProperty [
    :hidden true ;
    :searchable true ;
    :label "Description" ;
    :predicate dcterms:description
  ]
  ;
  :workProperty [
    :filterable true ;
    :label "Medium" ;
    :predicate dcterms:medium
  ]
  ;
  :workProperty [
    :filterable true ;
    :label "Subject" ;
    :predicate dcterms:subject
  ]
  ;
  :workProperty [
    :hidden true ;
    :searchable true ;
    :label "Title" ;
    :predicate :label
  ]
  ;
  :workProperty [
    :filterable true ;
    :label "Type" ;
    :predicate dcterms:type
  ]
  .
`;

export const defaultWorkSearchAppConfiguration = readWorkSearchAppConfiguration(
  [parseIntoDataset(ttl)]
)!;
