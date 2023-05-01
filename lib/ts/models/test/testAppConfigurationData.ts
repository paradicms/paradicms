import {DatasetCore} from "@rdfjs/types";
import {trigStringToDatasetCore} from "@paradicms/test/dist/trigStringToDatasetCore";

export const testAppConfigurationData: DatasetCore = trigStringToDatasetCore(`
@prefix : <http://www.paradicms.org/ns/configuration#> .

<http://example.com/appConfiguration> {
    <http://example.com/appConfiguration> a :AppConfiguration;
      :stylesheet <https://minorgordon.net/minorgordon.net.css> ;
      :title "Test title" 
      .
}
`);
