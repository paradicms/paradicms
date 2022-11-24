import * as React from "react";
import {StyleSheet, View} from "react-native";
import {RootTabScreenProps} from "../navigation/RootTabScreenProps";
import {testForm} from "../data/testForm";
import {
  FormNodeTypeViewer,
  FormViewer,
} from "@paradicms/react-native-shacl-forms";

export const FormScreen: React.FunctionComponent<RootTabScreenProps<
  "Form"
>> = ({navigation, route}) => {
  const form = testForm;

  let viewer: React.ReactElement;
  if (route.params?.formNodeId) {
    throw new EvalError();
  } else if (route.params?.formNodeTypeId) {
    const formNodeType = form.nodeTypeById(route.params!.formNodeTypeId);
    viewer = (
      <FormNodeTypeViewer
        formNodeType={formNodeType}
        onSelectFormNode={formNode =>
          navigation.navigate("Form", {formNodeId: formNode.id})
        }
      />
    );
  } else {
    viewer = (
      <FormViewer
        form={form}
        onSelectFormNodeType={formNodeType =>
          navigation.navigate("Form", {formNodeTypeId: formNodeType.id})
        }
      />
    );
  }

  return <View style={styles.container}>{viewer}</View>;
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
