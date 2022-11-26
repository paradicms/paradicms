import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {createFormPropertyViewer} from "./createFormPropertyViewer";
import {ListItem} from "@rneui/themed";

export const FormNodeViewer: React.FunctionComponent<{
  formNode: FormNode;
}> = ({formNode}) => (
  <View>
    {formNode.properties.map(formProperty => (
      <ListItem bottomDivider key={formProperty.id}>
        {createFormPropertyViewer({formProperty})}
      </ListItem>
    ))}
  </View>
);
