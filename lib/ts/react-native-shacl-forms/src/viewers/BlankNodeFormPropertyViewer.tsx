import {FormNode, FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";
import {useState} from "react";
import {StyleSheet, View} from "react-native";
import {ListItem, Text} from "@rneui/themed";
import {FormNodeViewer} from "./FormNodeViewer";
import {FormPropertyViewerFactory} from "./FormPropertyViewerFactory";
import {BlankNode, NamedNode} from "@rdfjs/types";
import {IconFactory} from "../IconFactory";
// import {FontAwesome} from "@expo/vector-icons";

export const BlankNodeFormPropertyViewer: React.FunctionComponent<{
  formProperty: FormProperty;
  formPropertyViewerFactory: FormPropertyViewerFactory;
  iconFactory: IconFactory;
}> = ({formProperty, formPropertyViewerFactory, iconFactory}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

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
          dataGraphNode: value as BlankNode | NamedNode,
          shape: nodeShape,
          shapesGraph: formProperty.shapesGraph,
        })
      }
      formPropertyViewerFactory={formPropertyViewerFactory}
      iconFactory={iconFactory}
    />
  );

  return (
    <View>
      <ListItem.Accordion
        content={
          <Text key={0} style={styles.label}>
            {formProperty.label}
          </Text>
        }
        expandIcon={iconFactory({name: "chevron-up"})}
        icon={iconFactory({name: "chevron-down"})}
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
      >
        {values.length === 1 ? (
          <ValueViewer value={values[0] as BlankNode | NamedNode} />
        ) : (
          values.map((value, valueI) => (
            <ListItem.Accordion
              content={`${formProperty.label} ${valueI + 1}`}
              expandIcon={iconFactory({name: "chevron-up"})}
              icon={iconFactory({name: "chevron-down"})}
              key={valueI + 1}
            >
              <ValueViewer value={value as BlankNode | NamedNode} />
            </ListItem.Accordion>
          ))
        )}
      </ListItem.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
});
