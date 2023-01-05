import {AsyncStorageFormShapeApi} from "../api/AsyncStorageFormShapeApi";
import {testFormShape} from "../data/testFormShape";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe("AsyncStorageFormShapeApi", () => {
  const sut = new AsyncStorageFormShapeApi();

  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it("gets an array of form shape summaries", async () => {
    expect(await sut.getFormShapeSummaries()).toEqual([]);

    await sut.putFormShape(testFormShape);

    expect(await sut.getFormShapeSummaries()).toEqual([testFormShape.summary]);
  });

  it("gets a specific form shape", async () => {
    await sut.putFormShape(testFormShape);

    expect((await sut.getFormShape(testFormShape.id)).id).toEqual(
      testFormShape.id
    );
  });

  it("throws an error on a shape that's missing", async () => {
    expect(sut.getFormShape(testFormShape.id)).rejects.toEqual(
      testFormShape.id
    );
  });

  it("puts a form shape", async () => {
    await sut.putFormShape(testFormShape);
  });
});
