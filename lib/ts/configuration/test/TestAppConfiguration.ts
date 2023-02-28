import {AppConfiguration, PropertyConfiguration} from "../src";
import {Dataset} from "@rdfjs/types";
import {configuration} from "@paradicms/vocabularies";

export class TestAppConfiguration extends AppConfiguration {
    static override fromDataset(dataset: Dataset) {
        const appConfiguration = AppConfiguration.fromDataset(dataset);
        if (appConfiguration) {
            return new TestAppConfiguration({
                dataset,
                graphNode: appConfiguration.graphNode,
                node: appConfiguration.node,
            });
        } else {
            return null;
        }
    }

    get workProperties(): readonly PropertyConfiguration[] {
        return this.filterAndMapObjects(configuration.workProperty, term =>
            term.termType === "BlankNode"
                ? new PropertyConfiguration({
                    dataset: this.dataset,
                    graphNode: this.graphNode,
                    node: term,
                })
                : null
        );
    }
}
