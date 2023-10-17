import {DatasetCore} from "@rdfjs/types";
import fs from "fs";
import {trigStringToDatasetCore} from "./trigStringToDatasetCore";

require.extensions[".trig"] = function(module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

export const syntheticData: DatasetCore = trigStringToDatasetCore(
  require("./synthetic_data_ts.trig")
);
