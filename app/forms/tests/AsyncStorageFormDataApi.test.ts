import {AsyncStorageFormDataApi} from "../api/AsyncStorageFormDataApi";
import {testFormDataFactory} from "../data/testFormDataFactory";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AsyncStorageFormShapeApi} from "../api/AsyncStorageFormShapeApi";
import {testFormShape} from "../data/testFormShape";
import {FormData} from "@paradicms/shacl-forms";

describe("AsyncStorageFormDataApi", () => {
  const formShapeApi = new AsyncStorageFormShapeApi();
  const sut = new AsyncStorageFormDataApi(formShapeApi);
  let testFormData: FormData;

  beforeEach(async () => {
    await AsyncStorage.clear();
    await formShapeApi.putFormShape(testFormShape);
    testFormData = testFormDataFactory();
  });

  it("gets an array of form data summaries", async () => {
    expect(await sut.getFormDataSummaries()).toEqual([]);

    await sut.putFormData(testFormData);

    expect(await sut.getFormDataSummaries()).toEqual([
      {id: testFormData.id, label: testFormData.label},
    ]);
  });

  it("gets a specific form data", async () => {
    await sut.putFormData(testFormData);

    expect((await sut.getFormData(testFormData.id)).id).toEqual(
      testFormData.id
    );
  });

  it("throws an error on a data that's missing", async () => {
    expect(sut.getFormData(testFormData.id)).rejects.toEqual(testFormData.id);
  });

  it("puts a form data", async () => {
    await sut.putFormData(testFormData);
  });
});
