export const testAppConfigurationTtl = `
@prefix : <http://www.paradicms.org/ns/configuration#> .

[] a :AppConfiguration;
  :stylesheet <https://minorgordon.net/minorgordon.net.css> ;
  :title "Test title" ;
  :workProperty [
    :predicate <http://example.com/predicate1> ; 
    :label "Property label 1" 
  ] ;
  :workProperty [
    :predicate <http://example.com/predicate2> ; 
    :label "Property label 2"
  ]
  .
`;
