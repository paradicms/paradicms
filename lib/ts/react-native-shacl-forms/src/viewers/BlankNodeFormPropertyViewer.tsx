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

  const ValueViewer: React.FunctionComponent<{
    value: BlankNode | NamedNode;
  }> = ({value}) => (
    <FormNodeViewer
      formNode={
        new FormNode({
          dataGraph: formProperty.dataGraph,
          dataGraphNode: value,
          shape: nodeShape,
          shapesGraph: formProperty.shapesGraph,
        })
      }
      formPropertyViewerFactory={formPropertyViewerFactory}
    />
  );

  return (
    <View>
      <Text key={0} style={styles.label}>
        {formProperty.label}
      </Text>
      {values.length === 1 ? (
        <ValueViewer value={values[0] as BlankNode | NamedNode} />
      ) : (
        values.map((value, valueI) => (
          <ListItem key={valueI + 1}>
            <ValueViewer value={value as BlankNode | NamedNode} />
          </ListItem>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
});
