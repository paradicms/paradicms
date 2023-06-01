import {ConcatenatingModelReader} from "../ConcatenatingModelReader";
import {ModelSet} from "../ModelSet";
import {Work} from "../Work";
import {Model} from "../Model";
import {SameAsWork} from "./SameAsWork";
import invariant from "ts-invariant";
import {Person} from "../Person";
import {SameAsPerson} from "./SameAsPerson";
import {SameAsMixin} from "../SameAsMixin";
import {requireDefined} from "@paradicms/utilities";

/**
 * Model reader that connects sameAs models from other ModelReader's.
 */
export class SameAsModelReader extends ConcatenatingModelReader {
    override readNamedPeople(kwds: { modelSet: ModelSet }): readonly Person[] {
        return this.readSameAsModels<Person>(super.readNamedPeople(kwds), SameAsPerson);
    }

    override readWorks(kwds: { modelSet: ModelSet }): readonly Work[] {
        return this.readSameAsModels(super.readWorks(kwds), SameAsWork);
    }

    private readSameAsModels<ModelT extends (Model & SameAsMixin<ModelT>)>(models: readonly ModelT[], sameAsModelFactory: {
        new(models: readonly ModelT[]): ModelT
    }): readonly ModelT[] {
        // Simple agglomerative algorithm for merging models that are sameAs each other
        const modelGroupsByModelKey: {[index: string]: ModelT[]} = {};
        const modelsByIri: {[index: string]: ModelT} = {};

        // Put each model into its own group
        for (const model of models) {
            modelGroupsByModelKey[model.key] = [model];
            for (const iri of model.iris) {
                modelsByIri[iri] = model;
            }
        }

        // For each (this, sameAs, that), "pull" that's model group into "this's" model group and adjust the pointers
        for (const model of models) {
            const modelGroup = modelGroupsByModelKey[model.key];
            invariant(typeof modelGroup !== "undefined");
            for (const sameAsModel of model.sameAs) {
                const sameAsModelGroup = requireDefined(modelGroupsByModelKey[sameAsModel.key]);
                for (const sameAsModelGroupModel of sameAsModelGroup) {
                    // If the sameAsModel is not already in modelGroup, pull it in
                    if (!modelGroup.some(modelGroupModel => modelGroupModel.key === sameAsModelGroupModel.key)) {
                        modelGroup.push(sameAsModelGroupModel);
                    }
                    // Point sameAsModel to the model group it was pulled into
                    modelGroupsByModelKey[sameAsModelGroupModel.key] = modelGroup;
                }
            }
        }

        const sameAsModels: ModelT[] = [];
        // Return unique model groups.
        for (const uniqueModelGroup of new Set(Object.values(modelGroupsByModelKey))) {
            invariant(uniqueModelGroup.length > 0);
            if (uniqueModelGroup.length === 1) {
                // Model was not sameAs anything and nothing was sameAs it, pass it through as-is.
                sameAsModels.push(uniqueModelGroup[0]);
            } else {
                sameAsModels.push(new sameAsModelFactory(uniqueModelGroup));
            }
        }
        return sameAsModels;
    }
}
