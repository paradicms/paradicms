import {turtleStringToDatasetCore} from "./turtleStringToDatasetCore";

export const invalidTestDataGraph = turtleStringToDatasetCore(`
@prefix paradicms: <http://paradicms.github.io/ns#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix schema: <https://schema.org/> .

paradicms:MinorGordon a schema:Person ;
    schema:givenName 2 ;
    schema:gender "male" ;
    schema:address [
        schema:postalCode 12180 ;
        schema:streetAddress 1
    ]
    .
`);
