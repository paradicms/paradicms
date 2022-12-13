import * as React from "react";

import {FormViewerScreen} from "../screens/FormViewerScreen";
import {FormStackParamList} from "./FormStackParamList";
import {FormStackScreenProps} from "./FormStackScreenProps";
import {useForm} from "../hooks/useForm";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FormNodeViewerScreen} from "../screens/FormNodeViewerScreen";
import {FormNodeTypeViewerScreen} from "../screens/FormNodeTypeViewerScreen";
import {FormNodeEditorScreen} from "../screens/FormNodeEditorScreen";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "@rneui/themed";

const Stack = createNativeStackNavigator<FormStackParamList>();

export const FormStackNavigator: React.FunctionComponent = () => {
  const {form} = useForm();
  const {theme} = useTheme();

  if (!form) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="FormViewerScreen">
      <Stack.Screen
        name="FormNodeEditorScreen"
        component={FormNodeEditorScreen}
        options={({
          navigation,
          route,
        }: FormStackScreenProps<"FormNodeEditorScreen">) => {
          const formNodeType = form!.nodeTypeById(route.params.formNodeTypeId);
          const formNode = formNodeType.nodeById(route.params.formNodeId);
          return {
            headerRight: () => (
              <FontAwesome.Button
                backgroundColor="transparent"
                color={theme.colors.primary}
                name="save"
                onPress={() =>
                  navigation.push("FormNodeViewerScreen", route.params)
                }
              />
            ),
            title: formNode.label,
          };
        }}
      />
      <Stack.Screen
        name="FormNodeTypeViewerScreen"
        component={FormNodeTypeViewerScreen}
        options={({
          route,
        }: FormStackScreenProps<"FormNodeTypeViewerScreen">) => {
          const formNodeType = form!.nodeTypeById(route.params.formNodeTypeId);
          return {
            title: formNodeType.label,
          };
        }}
      />
      <Stack.Screen
        name="FormNodeViewerScreen"
        component={FormNodeViewerScreen}
        options={({
          navigation,
          route,
        }: FormStackScreenProps<"FormNodeViewerScreen">) => {
          const formNodeType = form!.nodeTypeById(route.params.formNodeTypeId);
          const formNode = formNodeType.nodeById(route.params.formNodeId);
          return {
            headerRight: () => (
              <FontAwesome.Button
                backgroundColor="transparent"
                color={theme.colors.primary}
                name="edit"
                onPress={() =>
                  navigation.push("FormNodeEditorScreen", route.params)
                }
              />
            ),
            title: formNode.label,
          };
        }}
      />
      <Stack.Screen
        name="FormViewerScreen"
        component={FormViewerScreen}
        options={({
          navigation,
          route,
        }: FormStackScreenProps<"FormViewerScreen">) => ({
          title: "Form",
        })}
      />
    </Stack.Navigator>
  );
};
