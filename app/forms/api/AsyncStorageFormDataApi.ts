import {FormDataApi} from "./FormDataApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as yup from "yup";
import {InferType} from "yup";
import {datasetToFastString, fastStringToDataset} from "@paradicms/rdf";
import {FormData, FormDataSummary} from "@paradicms/shacl-forms";
import {FormShapeApi} from "./FormShapeApi";

const formDataItemKeyPrefix = "form-data-";
const formDataItemKey = (formDataId: string) =>
  formDataItemKeyPrefix + formDataId;
const formDataItemValueSchema = yup.object({
  dataGraph: yup.string().required(),
  id: yup.string().required(),
  label: yup.string().required(),
  shapeId: yup.string().required(),
});
type FormDataItemValueType = InferType<typeof formDataItemValueSchema>;

export class AsyncStorageFormDataApi implements FormDataApi {
  constructor(private readonly formShapeApi: FormShapeApi) {}

  getFormData(id: string): Promise<FormData> {
    return AsyncStorage.getItem(formDataItemKey(id)).then(itemValueJson => {
      if (!itemValueJson) {
        throw new RangeError(id);
      }
      const itemValue = JSON.parse(itemValueJson);
      formDataItemValueSchema.validateSync(itemValue);
      const dataGraph = fastStringToDataset(itemValue.dataGraph);
      return this.formShapeApi.getFormShape(itemValue.shapeId).then(
        shape =>
          new FormData({
            dataGraph,
            id: itemValue.id,
            label: itemValue.label,
            shape,
          })
      );
    });
  }

  getFormDataSummaries(): Promise<readonly FormDataSummary[]> {
    return AsyncStorage.getAllKeys().then(keys =>
      Promise.all(
        keys.flatMap(key => {
          if (!key.startsWith(formDataItemKeyPrefix)) {
            return [];
          }
          return [
            AsyncStorage.getItem(key).then(itemValueJson => {
              if (!itemValueJson) {
                throw new RangeError(key);
              }
              const itemValue = JSON.parse(itemValueJson);
              formDataItemValueSchema.validateSync(itemValue);
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

  putFormData(formData: FormData): Promise<void> {
    return new Promise((resolve, reject) => {
      const itemValue: FormDataItemValueType = {
        dataGraph: datasetToFastString(formData.dataGraph),
        id: formData.id,
        label: formData.label,
        shapeId: formData.shape.id,
      };
      formDataItemValueSchema.validateSync(itemValue);
      return AsyncStorage.setItem(
        formDataItemKey(formData.id),
        JSON.stringify(itemValue)
      ).then(resolve, reject);
    });
  }
}
