export const validTestDataGraphTtl = `
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix schema: <http://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:example:MinorGordon> a schema:Person ;
    schema:birthDate "2022-11-19"^^xsd:date;
    schema:givenName "Minor" ;
    schema:gender "male" ;
    schema:address [
        schema:postalCode 12180 ;
        schema:streetAddress "Unknown"
    ]
    .
    
<urn:example:Troy> a schema:Place ;
    schema:name "Troy"
    .
`;
