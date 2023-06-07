import {CachingModelSet} from "./CachingModelSet";
import {Dataset} from "@rdfjs/types";
import {ModelReader} from "./ModelReader";

export class DatasetBackedModelSet extends CachingModelSet {
    constructor(private readonly dataset: Dataset, modelReader: ModelReader) {
        super(modelReader);
    }

    override toRdf(): Dataset {
        return this.dataset;
    }
}
