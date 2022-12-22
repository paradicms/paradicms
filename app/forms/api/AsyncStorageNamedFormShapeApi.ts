import {NamedFormShapeApi} from "./NamedFormShapeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NamedFormShape} from "../models/NamedFormShape";
import * as yup from "yup";
import {InferType} from "yup";
import {DataFactory, parseIntoDataset} from "@paradicms/rdf";
import {ShapesGraph} from "@paradicms/shacl";

const namedFormShapeItemKeyPrefix = "form-shape-";
const namedFormShapeItemKey = (namedFormShapeId: string) =>
  namedFormShapeItemKeyPrefix + namedFormShapeId;
const namedFormShapeItemValueSchema = yup.object({
  id: yup.string().required(),
  label: yup.string().required(),
  nodeRdfTypes: yup.array(yup.string().required()).required(),
  shapesGraph: yup.string().required(),
});
type NamedFormShapeItemValueType = InferType<
  typeof namedFormShapeItemValueSchema
>;

export class AsyncStorageNamedFormShapeApi implements NamedFormShapeApi {
  getNamedFormShape(id: string): Promise<NamedFormShape> {
    return AsyncStorage.getItem(namedFormShapeItemKey(id)).then(
      itemValueJson => {
        if (!itemValueJson) {
          throw new RangeError(id);
        }
        const itemValue = JSON.parse(itemValueJson);
        namedFormShapeItemValueSchema.validateSync(itemValue);
        return new NamedFormShape({
          id: itemValue.id,
          label: itemValue.label,
          nodeRdfTypes: itemValue.nodeRdfTypes.map(DataFactory.namedNode),
          shapesGraph: new ShapesGraph(parseIntoDataset(itemValue.shapesGraph)),
        });
      }
    );
  }

  getNamedFormShapeIds(): Promise<readonly string[]> {
    return AsyncStorage.getAllKeys().then(keys =>
      keys.flatMap(key =>
        key.startsWith(namedFormShapeItemKeyPrefix)
          ? [key.substring(namedFormShapeItemKeyPrefix.length)]
          : []
      )
    );
  }

  putNamedFormShape(namedFormShape: NamedFormShape): Promise<void> {
    return new Promise((resolve, reject) => {
      const itemValue: NamedFormShapeItemValueType = {
        id: namedFormShape.id,
        label: namedFormShape.label,
        nodeRdfTypes: namedFormShape.nodeRdfTypes.map(
          nodeRdfType => nodeRdfType.value
        ),
        shapesGraph: namedFormShape.shapesGraph.dataset.toString(),
      };
      namedFormShapeItemValueSchema.validateSync(itemValue);
      return AsyncStorage.setItem(
        namedFormShapeItemKey(namedFormShape.id),
        JSON.stringify(itemValue)
      ).then(resolve, reject);
    });
  }
}
