import * as React from "react";
import {ScrollView} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useForm} from "../hooks/useForm";
import {Text} from "@rneui/themed";

export const FormNodeEditorScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeEditorScreen"
>> = ({navigation, route}) => {
  const {form} = useForm();

  if (!form) {
    return null;
  }

  const formNodeType = form.nodeTypeById(route.params.formNodeTypeId);
  const formNode = formNodeType.nodeById(route.params.formNodeId);

  return (
    <ScrollView>
      <Text>Implement the editor here</Text>
      {/*<FormNodeViewer*/}
      {/*  formNode={formNode}*/}
      {/*  formPropertyViewerFactory={createFormPropertyViewer}*/}
      {/*/>*/}
    </ScrollView>
  );
};
