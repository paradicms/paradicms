import {AsyncStorageFormDataApi} from "../api/AsyncStorageFormDataApi";
import {testAppFormDataFactory} from "../data/testAppFormDataFactory";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AsyncStorageFormShapeApi} from "../api/AsyncStorageFormShapeApi";
import {testAppFormShape} from "../data/testAppFormShape";
import {AppFormData} from "../models/AppFormData";

describe("AsyncStorageFormDataApi", () => {
  const formShapeApi = new AsyncStorageFormShapeApi();
  const sut = new AsyncStorageFormDataApi(formShapeApi);
  let testAppFormData: AppFormData;

  beforeEach(async () => {
    await AsyncStorage.clear();
    await formShapeApi.putFormShape(testAppFormShape);
    testAppFormData = testAppFormDataFactory();
  });

  it("gets an array of form data summaries", async () => {
    expect(await sut.getFormDataSummaries()).toEqual([]);

    await sut.putFormData(testAppFormData);

    expect(await sut.getFormDataSummaries()).toEqual([
      {id: testAppFormData.id, label: testAppFormData.label},
    ]);
  });

  it("gets a specific form data", async () => {
    await sut.putFormData(testAppFormData);

    expect((await sut.getFormData(testAppFormData.id)).id).toEqual(
      testAppFormData.id
    );
  });

  it("throws an error on a data that's missing", async () => {
    expect(sut.getFormData(testAppFormData.id)).rejects.toEqual(
      testAppFormData.id
    );
  });

  it("puts a form data", async () => {
    await sut.putFormData(testAppFormData);
  });
});
