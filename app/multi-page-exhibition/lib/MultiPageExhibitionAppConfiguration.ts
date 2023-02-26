import {AppConfiguration} from "@paradicms/configuration";
import {fastStringToDataset} from "@paradicms/rdf";
import {configuration, rdf} from "@paradicms/vocabularies";
import {Dataset} from "@rdfjs/types";

const defaultMultiPageExhibitionAppConfigurationDataset = fastStringToDataset(`
_:ac <${rdf.type.value}> <${configuration.AppConfiguration.value}> .
`);

export class MultiPageExhibitionAppConfiguration extends AppConfiguration {
    static get default(): MultiPageExhibitionAppConfiguration {
        return MultiPageExhibitionAppConfiguration.fromDataset(defaultMultiPageExhibitionAppConfigurationDataset)!;
    }

    private static fromAppConfiguration(appConfiguration: AppConfiguration): MultiPageExhibitionAppConfiguration {
        return new MultiPageExhibitionAppConfiguration({
            dataset: appConfiguration.dataset,
            graphNode: appConfiguration.graphNode,
            node: appConfiguration.node,
        });
    }

    static override fromDataset(dataset: Dataset): MultiPageExhibitionAppConfiguration | null {
        const appConfiguration = AppConfiguration.fromDataset(dataset);
        return appConfiguration ? MultiPageExhibitionAppConfiguration.fromAppConfiguration(appConfiguration) : null;
    }

    static override fromDatasets(datasets: readonly (Dataset | null)[]): MultiPageExhibitionAppConfiguration | null {
        const appConfiguration = AppConfiguration.fromDatasets(datasets);
        return appConfiguration ? MultiPageExhibitionAppConfiguration.fromAppConfiguration(appConfiguration) : null;
    }
}
