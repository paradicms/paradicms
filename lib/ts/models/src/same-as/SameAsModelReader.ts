import {ConcatenatingModelReader} from "../ConcatenatingModelReader";
import {ModelSet} from "../ModelSet";
import {Work} from "../Work";
import {Model} from "../Model";
import {SameAsWork} from "./SameAsWork";
import {BlankNode, NamedNode} from "@rdfjs/types";
import TermMap from "@rdfjs/term-map";
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
        const modelGroupsByModelIdentifier: TermMap<BlankNode | NamedNode, ModelT[]> = new TermMap();

        // Simple agglomerative algorithm for merging models that are sameAs each other

        // Put each model into its own group
        for (const model of models) {
            modelGroupsByModelIdentifier.set(model.identifier, [model]);
        }

        // For each (this, sameAs, that), "pull" that's model group into "this's" model group and adjust the pointers
        for (const model of models) {
            const modelGroup = modelGroupsByModelIdentifier.get(model.identifier);
            invariant(typeof modelGroup !== "undefined");
            for (const sameAsModel of model.sameAs) {
                const sameAsModelGroup = requireDefined(modelGroupsByModelIdentifier.get(sameAsModel.identifier));
                for (const sameAsModelGroupModel of sameAsModelGroup) {
                    // If the sameAsModel is not already in modelGroup, pull it in
                    if (!modelGroup.some(modelGroupModel => modelGroupModel.identifier.equals(sameAsModelGroupModel.identifier))) {
                        modelGroup.push(sameAsModelGroupModel);
                    }
                    // Point sameAsModel to the model group it was pulled into
                    modelGroupsByModelIdentifier.set(sameAsModelGroupModel.identifier, modelGroup);
                }
            }
        }

        const sameAsModels: ModelT[] = [];
        // Return unique model groups.
        for (const uniqueModelGroup of new Set(modelGroupsByModelIdentifier.values())) {
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
