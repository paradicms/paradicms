import * as React from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {FormDataViewer} from "@paradicms/react-native-shacl-forms";
import {useFormData} from "../hooks/useFormData";

export const FormDataViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormDataViewerScreen"
>> = ({navigation, route}) => {
  const {error, formData} = useFormData(route.params.formData.id);

  if (error) {
    navigation.navigate("FormErrorViewerScreen", {
      ...route.params,
      formNodeData: null,
      formNodeTypeData: null,
      error,
    });
    return null;
  }

  if (!formData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FormDataViewer
        formData={formData}
        onSelectFormNodeTypeData={formNodeTypeData =>
          navigation.push("FormNodeTypeDataViewerScreen", {
            formData: {id: formData.id, label: formData.label},
            formNodeTypeData: {
              id: formNodeTypeData.id,
              label: formNodeTypeData.label,
            },
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
