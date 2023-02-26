import {AppConfiguration} from "@paradicms/configuration";
import {fastStringToDataset} from "@paradicms/rdf";
import {configuration, rdf} from "@paradicms/vocabularies";
import {Dataset} from "@rdfjs/types";

const defaultSinglePageExhibitionAppConfigurationDataset = fastStringToDataset(`
_:ac <${rdf.type.value}> <${configuration.AppConfiguration.value}> .
`);

export class SinglePageExhibitionAppConfiguration extends AppConfiguration {
    static get default(): SinglePageExhibitionAppConfiguration {
        return SinglePageExhibitionAppConfiguration.fromDataset(defaultSinglePageExhibitionAppConfigurationDataset)!;
    }

    private static fromAppConfiguration(appConfiguration: AppConfiguration): SinglePageExhibitionAppConfiguration {
        return new SinglePageExhibitionAppConfiguration({
            dataset: appConfiguration.dataset,
            graphNode: appConfiguration.graphNode,
            node: appConfiguration.node,
        });
    }

    static override fromDataset(dataset: Dataset): SinglePageExhibitionAppConfiguration | null {
        const appConfiguration = AppConfiguration.fromDataset(dataset);
        return appConfiguration ? SinglePageExhibitionAppConfiguration.fromAppConfiguration(appConfiguration) : null;
    }

    static override fromDatasets(datasets: readonly (Dataset | null)[]): SinglePageExhibitionAppConfiguration | null {
        const appConfiguration = AppConfiguration.fromDatasets(datasets);
        return appConfiguration ? SinglePageExhibitionAppConfiguration.fromAppConfiguration(appConfiguration) : null;
    }
}
