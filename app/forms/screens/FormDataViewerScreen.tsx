import * as React from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {FormDataViewer} from "@paradicms/react-native-shacl-forms";
import {useFormData} from "../hooks/useFormData";

export const FormDataViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormDataViewerScreen"
>> = ({navigation, route}) => {
  const {error, formData} = useFormData(route.params.formDataId);

  if (error) {
    navigation.navigate("FormErrorScreen", {
      formDataId: route.params.formDataId,
      formNodeDataId: null,
      formNodeTypeDataId: null,
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
            formDataId: formData.id,
            formNodeTypeDataId: formNodeTypeData.id,
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
