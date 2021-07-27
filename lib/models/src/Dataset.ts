import {Collection} from "./Collection";
import {Image} from "./Image";
import {Institution} from "./Institution";
import {License} from "./License";
import {Object} from "./Object";
import {PropertyDefinition} from "./PropertyDefinition";
import {RightsStatement} from "./RightsStatement";

/**
 * Interface that aggregates models.
 *
 * These could be all of the models in a store, or all of the models connected to a specific model (e.g., the collections, institution, images, et al. attached to a specific object).
 *
 * Dataset is used to transfer models via JSON with minimal redundancy between:
 * - getStaticProps and a component
 * - client and server on the network with minimal redundancy
 *
 * Non-JSON serializable classes such as IndexedDataset and JoinedDataset add redundant abstractions such as indices on top of Dataset.
 */
export interface Dataset {
  readonly collections: readonly Collection[];
  readonly images: readonly Image[];
  readonly institutions: readonly Institution[];
  readonly licenses: readonly License[];
  readonly objects: readonly Object[];
  readonly propertyDefinitions: readonly PropertyDefinition[];
  readonly rightsStatements: readonly RightsStatement[];
}
