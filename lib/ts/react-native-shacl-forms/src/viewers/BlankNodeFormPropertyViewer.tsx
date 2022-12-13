import {FormNode, FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";
import {useState} from "react";
import {View} from "react-native";
import {ListItem, Text, useTheme} from "@rneui/themed";
import {FormNodeViewer} from "./FormNodeViewer";
import {FormPropertyViewerFactory} from "./FormPropertyViewerFactory";
import {BlankNode, NamedNode} from "@rdfjs/types";
import {IconFactory} from "../IconFactory";
import {getRdfNodeLabel} from "@paradicms/rdf";

export const BlankNodeFormPropertyViewer: React.FunctionComponent<{
  formProperty: FormProperty;
  formPropertyViewerFactory: FormPropertyViewerFactory;
  iconFactory: IconFactory;
}> = ({formProperty, formPropertyViewerFactory, iconFactory}) => {
  const [expandedValueI, setExpandedValueI] = useState<number>(-1);
  const {theme} = useTheme();

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
      {values.map((value, valueI) => (
        <ListItem.Accordion
          content={
            <Text>
              {getRdfNodeLabel({
                dataset: formProperty.dataGraph,
                node: value as BlankNode | NamedNode,
              }) ?? `${formProperty.label} ${valueI + 1}`}
            </Text>
          }
          expandIcon={iconFactory({name: "chevron-up"})}
          isExpanded={expandedValueI === valueI}
          icon={iconFactory({name: "chevron-down"})}
          key={valueI + 1}
          onPress={() =>
            setExpandedValueI(expandedValueI !== valueI ? valueI : -1)
          }
        >
          <View style={{marginLeft: theme.spacing.xl}}>
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
          </View>
        </ListItem.Accordion>
      ))}
    </View>
  );
};
