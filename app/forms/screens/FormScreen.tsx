import * as React from "react";
import {useMemo} from "react";
import {StyleSheet, View} from "react-native";
import {RootTabScreenProps} from "../navigation/RootTabScreenProps";
import {
  FormNodeTypeViewer,
  FormViewer,
} from "@paradicms/react-native-shacl-forms";
import {FormNodeViewer} from "@paradicms/react-native-shacl-forms/dist/viewers/FormNodeViewer";
import {resolveFormScreenRouteParams} from "./resolveFormScreenRouteParams";
import {useForm} from "../hooks/useForm";
import {createFormPropertyViewer} from "@paradicms/react-native-shacl-forms/dist/viewers/createFormPropertyViewer";

export const FormScreen: React.FunctionComponent<RootTabScreenProps<
  "Form"
>> = ({navigation, route}) => {
  const {form} = useForm();

  const viewer: React.ReactElement | null = useMemo(() => {
    if (!form) {
      return null;
    }
    const {formNode, formNodeType} = resolveFormScreenRouteParams(form, route);
    if (formNode) {
      return (
        <FormNodeViewer
          formNode={formNode}
          formPropertyViewerFactory={createFormPropertyViewer}
        />
      );
    } else if (formNodeType) {
      return (
        <FormNodeTypeViewer
          formNodeType={formNodeType}
          onSelectFormNode={formNode =>
            navigation.navigate("Form", {
              formNodeId: formNode.id,
              formNodeTypeId: formNodeType.id,
            })
          }
        />
      );
    } else {
      return (
        <FormViewer
          form={form}
          onSelectFormNodeType={formNodeType =>
            navigation.navigate("Form", {formNodeTypeId: formNodeType.id})
          }
        />
      );
    }
  }, [form, route]);

  if (!form) {
    return null;
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
