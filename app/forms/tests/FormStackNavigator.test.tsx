import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormStackNavigator} from "../navigation/FormStackNavigator";
import {NavigationContainer} from "@react-navigation/native";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <FormStackNavigator />
      </NavigationContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
