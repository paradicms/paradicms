import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NotFoundScreen from "../screens/NotFoundScreen";
import ModalScreen from "../screens/ModalScreen";
import * as React from "react";
import {RootTabNavigator} from "./RootTabNavigator";
import {RootStackParamList} from "./RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={RootTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: "Oops!"}}
      />
      <Stack.Group screenOptions={{presentation: "modal"}}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
