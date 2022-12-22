import {NamedFormDataApi} from "./NamedFormDataApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NamedFormData} from "../models/NamedFormData";
import * as yup from "yup";
import {InferType} from "yup";
import {NamedFormShapeApi} from "./NamedFormShapeApi";

const namedFormDataItemKeyPrefix = "form-data-";
const namedFormDataItemValueSchema = yup.object({
  id: yup.string().required(),
  label: yup.string().required(),
  dataGraph: yup.string().required(),
  shapeId: yup.string().required(),
});
type NamedFormDataItemValueType = InferType<
  typeof namedFormDataItemValueSchema
>;

export class AsyncStorageNamedFormDataApi implements NamedFormDataApi {
  constructor(private readonly namedFormShapeApi: NamedFormShapeApi): {};

  private namedFormDataItemKey(namedFormDataId: string) {
    return namedFormDataItemKeyPrefix + namedFormDataId;
  }

  getNamedFormData(id: string): Promise<NamedFormData> {
    // AsyncStorage.getItem(AsyncStorageNamedFormDataApi.formDataItemKeyPrefix(id)).then(namedFormDataJson => {
    //    AsyncStorageNamedFormDataApi.formDataItemValueSchema.
    // });
  }

  getNamedFormDataIds(): Promise<readonly string[]> {
    return AsyncStorage.getAllKeys().then(keys =>
      keys.flatMap(key =>
        key.startsWith(namedFormDataItemKeyPrefix)
          ? [key.substring(namedFormDataItemKeyPrefix.length)]
          : []
      )
    );
  }

  putNamedFormData(namedFormData: NamedFormData): Promise<void> {
    return new Promise((resolve, reject) => {
      const itemValue: NamedFormDataItemValueType = {
        dataGraph: namedFormData.dataGraph.toString(),
        id: namedFormData.id,
        label: namedFormData.label,
        shapeId: namedFormData.shape.id,
      };
      namedFormDataItemValueSchema.validateSync(itemValue);
      AsyncStorage.setItem(
        AsyncStorageNamedFormDataApi.(namedFormData.id),
        JSON.stringify(itemValue)
      );
    });
  }
}
