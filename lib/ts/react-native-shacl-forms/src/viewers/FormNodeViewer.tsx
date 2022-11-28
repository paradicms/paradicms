import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {ListItem} from "@rneui/themed";
import {FormPropertyViewerFactory} from "./FormPropertyViewerFactory";

export const FormNodeViewer: React.FunctionComponent<{
  formNode: FormNode;
  formPropertyViewerFactory: FormPropertyViewerFactory;
}> = ({formNode, formPropertyViewerFactory}) => (
  <View>
    {formNode.properties.map(formProperty => (
      <ListItem bottomDivider key={formProperty.id}>
        {formPropertyViewerFactory({formProperty})}
      </ListItem>
    ))}
  </View>
);
