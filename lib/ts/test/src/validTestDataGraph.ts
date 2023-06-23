import {turtleStringToDatasetCore} from "./turtleStringToDatasetCore";

export const validTestDataGraph = turtleStringToDatasetCore(`
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:example:MinorGordon> a schema:Person ;
    schema:birthDate "2022-11-19"^^xsd:date;
    schema:givenName "Minor" ;
    schema:gender "male" ;
    schema:address [
        schema:postalCode 12180 ;
        schema:streetAddress "Unknown"
    ] ;
    rdfs:label "Minor Gordon"
    .
    
<urn:example:Troy> a schema:Place ;
    schema:name "Troy"
    .
`);
