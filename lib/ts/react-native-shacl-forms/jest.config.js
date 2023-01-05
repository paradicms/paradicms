const {defaults: tsjPreset} = require("ts-jest/presets");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "react-native",
  fakeTimers: {
    enableGlobally: true,
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  // https://github.com/react-native-elements/react-native-elements/discussions/3290
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@react-native|react-native|@rneui/*)",
  ],
};
