import {ModelSetFactory} from "@paradicms/models";
import {syntheticData} from "@paradicms/test";
import {describe} from "mocha";
import {MemApi} from "../src/MemApi";
import {behavesLikeApi} from "./behavesLikeApi";

describe("MemApi", () => {
  behavesLikeApi(
    new MemApi({
      modelSet: ModelSetFactory.fromDataset(syntheticData),
    })
  );
});
