import * as React from "react";

import {FormDataViewerScreen} from "../screens/FormDataViewerScreen";
import {FormStackParamList} from "./FormStackParamList";
import {FormStackScreenProps} from "./FormStackScreenProps";
import {useFormData} from "../hooks/useFormData";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FormNodeDataViewerScreen} from "../screens/FormNodeDataViewerScreen";
import {FormNodeTypeDataViewerScreen} from "../screens/FormNodeTypeDataViewerScreen";
import {FormNodeDataEditorScreen} from "../screens/FormNodeDataEditorScreen";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "@rneui/themed";
import {FormErrorScreen} from "../screens/FormErrorViewerScreen";

const Stack = createNativeStackNavigator<FormStackParamList>();

export const FormStackNavigator: React.FunctionComponent = () => {
  const {formData} = useFormData();
  const {theme} = useTheme();

  if (!formData) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="FormDataViewerScreen">
      <Stack.Group>
        <Stack.Screen
          name="FormNodeDataEditorScreen"
          component={FormNodeDataEditorScreen}
          options={({
            navigation,
            route,
          }: FormStackScreenProps<"FormNodeDataEditorScreen">) => {
            const formNodeType = formData!.nodeTypeById(
              route.params.formNodeTypeDataId
            );
            const formNode = formNodeType.nodeById(route.params.formNodeDataId);
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
              title: formNode.label,
            };
          }}
        />
        <Stack.Screen
          name="FormNodeTypeDataViewerScreen"
          component={FormNodeTypeDataViewerScreen}
          options={({
            route,
          }: FormStackScreenProps<"FormNodeTypeDataViewerScreen">) => {
            const formNodeType = formData!.nodeTypeById(
              route.params.formNodeTypeDataId
            );
            return {
              title: formNodeType.label,
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
            const formNodeType = formData!.nodeTypeById(
              route.params.formNodeTypeDataId
            );
            const formNode = formNodeType.nodeById(route.params.formNodeDataId);
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
              title: formNode.label,
            };
          }}
        />
        <Stack.Screen
          name="FormDataViewerScreen"
          component={FormDataViewerScreen}
          options={({
            navigation,
            route,
          }: FormStackScreenProps<"FormDataViewerScreen">) => ({
            title: "FormData",
          })}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: "modal"}}>
        <Stack.Screen
          component={FormErrorScreen}
          name="FormErrorScreen"
        ></Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
};
