import {AsyncStorageFormShapeApi} from "../api/AsyncStorageFormShapeApi";
import {testAppFormShape} from "../data/testAppFormShape";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe("AsyncStorageFormShapeApi", () => {
  const sut = new AsyncStorageFormShapeApi();

  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it("gets an array of form shape summaries", async () => {
    expect(await sut.getFormShapeSummaries()).toEqual([]);

    await sut.putFormShape(testAppFormShape);

    expect(await sut.getFormShapeSummaries()).toEqual([
      {id: testAppFormShape.id, label: testAppFormShape.label},
    ]);
  });

  it("gets a specific form shape", async () => {
    await sut.putFormShape(testAppFormShape);

    expect((await sut.getFormShape(testAppFormShape.id)).id).toEqual(
      testAppFormShape.id
    );
  });

  it("throws an error on a shape that's missing", async () => {
    expect(sut.getFormShape(testAppFormShape.id)).rejects.toEqual(
      testAppFormShape.id
    );
  });

  it("puts a form shape", async () => {
    await sut.putFormShape(testAppFormShape);
  });
});
