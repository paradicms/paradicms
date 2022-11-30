import * as React from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useForm} from "../hooks/useForm";
import {FormNodeTypeViewer} from "@paradicms/react-native-shacl-forms";

export const FormNodeTypeViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeTypeViewerScreen"
>> = ({navigation, route}) => {
  const {form} = useForm();

  if (!form) {
    return null;
  }

  const formNodeType = form.nodeTypeById(route.params.formNodeTypeId);

  return (
    <View style={styles.container}>
      <FormNodeTypeViewer
        formNodeType={formNodeType}
        onSelectFormNode={formNode =>
          navigation.navigate("FormNodeViewerScreen", {
            formNodeId: formNode.id,
            formNodeTypeId: formNodeType.id,
          })
        }
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
