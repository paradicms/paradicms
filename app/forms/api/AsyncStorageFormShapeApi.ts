import {FormShapeApi} from "./FormShapeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as yup from "yup";
import {InferType} from "yup";
import {DataFactory, parseIntoDataset} from "@paradicms/rdf";
import {ShapesGraph} from "@paradicms/shacl";
import {FormShape, FormShapeSummary} from "@paradicms/shacl-forms";

const formShapeItemKeyPrefix = "form-shape-";
const formShapeItemKey = (formShapeId: string) =>
  formShapeItemKeyPrefix + formShapeId;
const formShapeItemValueSchema = yup.object({
  id: yup.string().required(),
  label: yup.string().required(),
  nodeRdfTypes: yup.array(yup.string().required()).required(),
  shapesGraph: yup.string().required(),
});
type FormShapeItemValueType = InferType<typeof formShapeItemValueSchema>;

export class AsyncStorageFormShapeApi implements FormShapeApi {
  getFormShape(id: string): Promise<FormShape> {
    return AsyncStorage.getItem(formShapeItemKey(id)).then(itemValueJson => {
      if (!itemValueJson) {
        throw new RangeError(id);
      }
      const itemValue = JSON.parse(itemValueJson);
      formShapeItemValueSchema.validateSync(itemValue);
      return new FormShape({
        id: itemValue.id,
        label: itemValue.label,
        nodeRdfTypes: itemValue.nodeRdfTypes.map(DataFactory.namedNode),
        shapesGraph: new ShapesGraph(parseIntoDataset(itemValue.shapesGraph)),
      });
    });
  }

  getFormShapeSummaries(): Promise<readonly FormShapeSummary[]> {
    return AsyncStorage.getAllKeys().then(keys =>
      Promise.all(
        keys.flatMap(key => {
          if (!key.startsWith(formShapeItemKeyPrefix)) {
            return [];
          }
          return [
            AsyncStorage.getItem(key).then(itemValueJson => {
              if (!itemValueJson) {
                throw new RangeError(key);
              }
              const itemValue = JSON.parse(itemValueJson);
              formShapeItemValueSchema.validateSync(itemValue);
              return {
                id: itemValue.id,
                label: itemValue.label,
              };
            }),
          ];
        })
      )
    );
  }

  putFormShape(formShape: FormShape): Promise<void> {
    return new Promise((resolve, reject) => {
      const itemValue: FormShapeItemValueType = {
        id: formShape.id,
        label: formShape.label,
        nodeRdfTypes: formShape.nodeRdfTypes.map(
          nodeRdfType => nodeRdfType.value
        ),
        shapesGraph: formShape.shapesGraph.dataset.toString(),
      };
      formShapeItemValueSchema.validateSync(itemValue);
      return AsyncStorage.setItem(
        formShapeItemKey(formShape.id),
        JSON.stringify(itemValue)
      ).then(resolve, reject);
    });
  }
}
