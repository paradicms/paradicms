export const validTestDataGraphTtl = `
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix schema: <http://schema.org/> .

<urn:example:MinorGordon> a schema:Person ;
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
