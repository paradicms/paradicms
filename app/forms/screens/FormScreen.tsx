import * as React from "react";
import {StyleSheet} from "react-native";
import {ThemedView} from "../components/ThemedView";
import {RootTabScreenProps} from "../navigation/RootTabScreenProps";
import {testForm} from "../data/testForm";
import {FormViewer} from "@paradicms/react-native-shacl-forms";

export const FormScreen: React.FunctionComponent<RootTabScreenProps<
  "Form"
>> = ({navigation, route}) => {
  const form = testForm;

  return (
    <ThemedView style={styles.container}>
      {/*<ThemedText style={styles.title}>Home</ThemedText>*/}
      <ThemedView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FormViewer
        form={form}
        onSelectFormNodeType={formNodeType =>
          navigation.navigate("Form", {formNodeTypeId: formNodeType.id})
        }
      />
    </ThemedView>
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
