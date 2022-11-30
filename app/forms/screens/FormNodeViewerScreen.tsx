import * as React from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useForm} from "../hooks/useForm";
import {FormNodeViewer} from "@paradicms/react-native-shacl-forms/dist/viewers/FormNodeViewer";
import {createFormPropertyViewer} from "@paradicms/react-native-shacl-forms/dist/viewers/createFormPropertyViewer";

export const FormNodeViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeViewerScreen"
>> = ({navigation, route}) => {
  const {form} = useForm();

  if (!form) {
    return null;
  }

  const formNodeType = form.nodeTypeById(route.params.formNodeTypeId);
  const formNode = formNodeType.nodeById(route.params.formNodeId);

  return (
    <View style={styles.container}>
      <FormNodeViewer
        formNode={formNode}
        formPropertyViewerFactory={createFormPropertyViewer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
