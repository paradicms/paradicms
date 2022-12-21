import {FormApi} from "./FormApi";
import AsyncStorage from "@react-native-async-storage/async-storage/lib/typescript/AsyncStorage.native";
import {Form} from "@paradicms/shacl-forms";

export class AsyncStorageFormApi implements FormApi {
  private static readonly formItemKeyPrefix = "form-";

  getForm(id: string): Promise<Form> {}

  getFormIds(): Promise<readonly string[]> {
    return AsyncStorage.getAllKeys().then(keys =>
      keys.flatMap(key =>
        key.startsWith(AsyncStorageFormApi.formItemKeyPrefix)
          ? [key.substring(AsyncStorageFormApi.formItemKeyPrefix.length)]
          : []
      )
    );
  }

  private formItemKey(formId: string) {
    AsyncStorageFormApi.formItemKeyPrefix;
  }
}
