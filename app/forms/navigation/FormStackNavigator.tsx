import * as React from "react";

import {FormDataViewerScreen} from "../screens/FormDataViewerScreen";
import {FormStackParamList} from "./FormStackParamList";
import {FormStackScreenProps} from "./FormStackScreenProps";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FormNodeDataViewerScreen} from "../screens/FormNodeDataViewerScreen";
import {FormNodeTypeDataViewerScreen} from "../screens/FormNodeTypeDataViewerScreen";
import {FormNodeDataEditorScreen} from "../screens/FormNodeDataEditorScreen";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "@rneui/themed";
import {FormErrorViewerScreen} from "../screens/FormErrorViewerScreen";
import {FormShapeSummariesViewerScreen} from "../screens/FormShapeSummariesViewerScreen";
import {FormDataSummariesViewerScreen} from "../screens/FormDataSummariesViewerScreen";

const Stack = createNativeStackNavigator<FormStackParamList>();

export const FormStackNavigator: React.FunctionComponent = () => {
  const {theme} = useTheme();

  return (
    <Stack.Navigator initialRouteName="FormShapeSummariesViewerScreen">
      <Stack.Group>
        <Stack.Screen
          name="FormDataSummariesViewerScreen"
          component={FormDataSummariesViewerScreen}
          options={({
            route,
          }: FormStackScreenProps<"FormDataSummariesViewerScreen">) => ({
            title: route.params.formShape.label,
          })}
        />
        <Stack.Screen
          name="FormDataViewerScreen"
          component={FormDataViewerScreen}
          options={({route}: FormStackScreenProps<"FormDataViewerScreen">) => ({
            title: route.params.formData.label,
          })}
        />
        <Stack.Screen
          name="FormNodeDataEditorScreen"
          component={FormNodeDataEditorScreen}
          options={({
            navigation,
            route,
          }: FormStackScreenProps<"FormNodeDataEditorScreen">) => {
            return {
              headerRight: () => (
                <FontAwesome.Button
                  backgroundColor="transparent"
                  color={theme.colors.primary}
                  name="save"
                  onPress={() =>
                    navigation.push("FormNodeDataViewerScreen", route.params)
                  }
                />
              ),
              title: route.params.formNodeData.label,
            };
          }}
        />
        <Stack.Screen
          name="FormNodeTypeDataViewerScreen"
          component={FormNodeTypeDataViewerScreen}
          options={({
            route,
          }: FormStackScreenProps<"FormNodeTypeDataViewerScreen">) => {
            return {
              title: route.params.formNodeTypeData.label,
            };
          }}
        />
        <Stack.Screen
          name="FormNodeDataViewerScreen"
          component={FormNodeDataViewerScreen}
          options={({
            navigation,
            route,
          }: FormStackScreenProps<"FormNodeDataViewerScreen">) => {
            return {
              headerRight: () => (
                <FontAwesome.Button
                  backgroundColor="transparent"
                  color={theme.colors.primary}
                  name="edit"
                  onPress={() =>
                    navigation.push("FormNodeDataEditorScreen", route.params)
                  }
                />
              ),
              title: route.params.formNodeData.label,
            };
          }}
        />
        <Stack.Screen
          name="FormShapeSummariesViewerScreen"
          component={FormShapeSummariesViewerScreen}
          options={{title: "Shapes"}}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: "modal"}}>
        <Stack.Screen
          component={FormErrorViewerScreen}
          name="FormErrorViewerScreen"
        ></Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
};
