import {FormNode, FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {ListItem, Text} from "@rneui/themed";
import {FormNodeViewer} from "./FormNodeViewer";
import {BlankNode, NamedNode} from "@rdfjs/types";
import {FormPropertyViewerFactory} from "./FormPropertyViewerFactory";

export const BlankNodeFormPropertyViewer: React.FunctionComponent<{
  formProperty: FormProperty;
  formPropertyViewerFactory: FormPropertyViewerFactory;
}> = ({formProperty, formPropertyViewerFactory}) => {
  const values = formProperty.values.filter(
    value => value.termType === "BlankNode"
  );
  if (values.length === 0) {
    console.info(`form property ${formProperty.id} has no values`);
    return null;
  }

  const nodeShapes = formProperty.shape.nodeShapes;
  if (nodeShapes.length === 0) {
    console.info(`form property ${formProperty.id} has no node shapes`);
    return null;
  } else if (nodeShapes.length > 1) {
    console.info(
      `form property ${formProperty.id} has ${nodeShapes.length} node shapes`
    );
    return null;
  }
  const nodeShape = nodeShapes[0];

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{formProperty.label}</Text>
      </View>
      <View>
        {values.map((value, valueI) => {
          const formNode = new FormNode({
            dataGraph: formProperty.dataGraph,
            dataGraphNode: value as BlankNode | NamedNode,
            shape: nodeShape,
            shapesGraph: formProperty.shapesGraph,
          });
          return (
            <ListItem key={valueI}>
              <FormNodeViewer
                formNode={formNode}
                formPropertyViewerFactory={formPropertyViewerFactory}
              />
            </ListItem>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
  labelContainer: {
    alignItems: "center",
  },
});
