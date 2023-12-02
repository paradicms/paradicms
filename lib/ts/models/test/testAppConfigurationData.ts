import {trigStringToDatasetCore} from "@paradicms/test";
import {DatasetCore} from "@rdfjs/types";

export const testAppConfigurationData: DatasetCore = trigStringToDatasetCore(`
@prefix : <http://paradicms.github.io/ns/configuration#> .

<http://example.com/appConfiguration> {
    <http://example.com/appConfiguration> a :AppConfiguration;
      :stylesheet <https://minorgordon.net/minorgordon.net.css> ;
      :title "Test title" 
      .
}
`);
