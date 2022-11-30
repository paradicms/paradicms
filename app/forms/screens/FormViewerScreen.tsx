import * as React from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {FormViewer} from "@paradicms/react-native-shacl-forms";
import {useForm} from "../hooks/useForm";

export const FormViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormViewerScreen"
>> = ({navigation, route}) => {
  const {form} = useForm();

  if (!form) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FormViewer
        form={form}
        onSelectFormNodeType={formNodeType =>
          navigation.navigate("FormNodeTypeViewerScreen", {
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
