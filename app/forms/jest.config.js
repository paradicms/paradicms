const {defaults: tsjPreset} = require("ts-jest/presets");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // https://github.com/react-native-elements/react-native-elements/discussions/3290
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};
