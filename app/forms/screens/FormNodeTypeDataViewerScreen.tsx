import * as React from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormData} from "../hooks/useFormData";
import {FormNodeTypeDataViewer} from "@paradicms/react-native-shacl-forms";

export const FormNodeTypeDataViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeTypeDataViewerScreen"
>> = ({navigation, route}) => {
  const {error, formData} = useFormData(route.params.formData.id);

  if (error) {
    navigation.navigate("FormErrorScreen", {
      ...route.params,
      formNodeData: null,
      error,
    });
    return null;
  }

  if (!formData) {
    return null;
  }

  const formNodeTypeData = formData.nodeTypeById(
    route.params.formNodeTypeData.id
  );

  return (
    <View style={styles.container}>
      <FormNodeTypeDataViewer
        formNodeTypeData={formNodeTypeData}
        onSelectFormNodeData={formNodeData =>
          navigation.push("FormNodeDataViewerScreen", {
            ...route.params,
            formNodeData: {id: formNodeData.id, label: formNodeData.label},
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
