import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {SettingsScreen} from "../screens/SettingsScreen";
import {FormStackNavigator} from "./FormStackNavigator";

const Drawer = createDrawerNavigator();

export const RootNavigator: React.FunctionComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Form"
        component={FormStackNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </Drawer.Navigator>
  );
};
