import * as React from "react";
import {StyleSheet, View} from "react-native";
import {RootTabScreenProps} from "../navigation/RootTabScreenProps";
import {testForm} from "../data/testForm";
import {FormViewer} from "@paradicms/react-native-shacl-forms";

export const FormScreen: React.FunctionComponent<RootTabScreenProps<
  "Form"
>> = ({navigation, route}) => {
  const form = testForm;

  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Home</ThemedText>*/}
      <View style={styles.separator} />
      <FormViewer
        form={form}
        onSelectFormNodeType={formNodeType =>
          navigation.navigate("Form", {formNodeTypeId: formNodeType.id})
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
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
