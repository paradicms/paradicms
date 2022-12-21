import * as React from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {FormDataViewer} from "@paradicms/react-native-shacl-forms";
import {useFormData} from "../hooks/useFormData";

export const FormDataViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormDataViewerScreen"
>> = ({navigation, route}) => {
  const {formData} = useFormData();

  if (!formData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FormDataViewer
        formData={formData}
        onSelectFormNodeType={formNodeType =>
          navigation.push("FormNodeTypeDataViewerScreen", {
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
