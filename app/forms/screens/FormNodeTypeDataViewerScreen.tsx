import * as React from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormData} from "../hooks/useFormData";
import {FormNodeTypeDataViewer} from "@paradicms/react-native-shacl-forms";

export const FormNodeTypeDataViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeTypeDataViewerScreen"
>> = ({navigation, route}) => {
  const {formData} = useFormData();

  if (!formData) {
    return null;
  }

  const formNodeTypeData = formData.nodeTypeById(route.params.formNodeTypeId);

  return (
    <View style={styles.container}>
      <FormNodeTypeDataViewer
        formNodeTypeData={formNodeTypeData}
        onSelectFormNode={formNode =>
          navigation.push("FormNodeDataViewerScreen", {
            formNodeId: formNode.id,
            formNodeTypeId: formNodeTypeData.id,
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
