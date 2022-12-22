import {AsyncStorageNamedFormShapeApi} from "../api/AsyncStorageNamedFormShapeApi";
import {testNamedFormShape} from "../data/testNamedFormShape";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe("AsyncStorageNamedFormShapeApi", () => {
  const sut = new AsyncStorageNamedFormShapeApi();

  beforeEach(async () => {
    await AsyncStorage.clear();
    await sut.putNamedFormShape(testNamedFormShape);
  });

  it("gets an array of id's", async () => {
    expect(await sut.getNamedFormShapeIds()).toEqual([testNamedFormShape.id]);
  });
});
