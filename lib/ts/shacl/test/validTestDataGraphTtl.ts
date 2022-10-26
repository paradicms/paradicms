export const validTestDataGraphTtl = `
@prefix paradicms: <http://www.paradicms.org/ns#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix schema: <http://schema.org/> .

paradicms:MinorGordon a schema:Person ;
    schema:givenName "Minor" ;
    schema:gender "male" ;
    schema:address [
        schema:postalCode 12180 ;
        schema:streetAddress "Unknown"
    ]
    .
`;
