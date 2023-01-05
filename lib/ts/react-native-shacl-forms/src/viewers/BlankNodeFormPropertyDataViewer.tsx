import {FormNodeData, FormPropertyData} from "@paradicms/shacl-forms";
import * as React from "react";
import {useState} from "react";
import {View} from "react-native";
import {ListItem, Text, useTheme} from "@rneui/themed";
import {FormNodeDataViewer} from "./FormNodeDataViewer";
import {FormPropertyDataViewerFactory} from "./FormPropertyDataViewerFactory";
import {BlankNode, NamedNode} from "@rdfjs/types";
import {IconFactory} from "../IconFactory";
import {getRdfNodeLabel} from "@paradicms/rdf";

export const BlankNodeFormPropertyDataViewer: React.FunctionComponent<{
  formPropertyData: FormPropertyData;
  formPropertyDataViewerFactory: FormPropertyDataViewerFactory;
  iconFactory: IconFactory;
}> = ({formPropertyData, formPropertyDataViewerFactory, iconFactory}) => {
  const [expandedValueI, setExpandedValueI] = useState<number>(-1);
  const {theme} = useTheme();

  const values = formPropertyData.values.filter(
    value => value.termType === "BlankNode"
  );
  if (values.length === 0) {
    console.info(`form property ${formPropertyData.id} has no values`);
    return null;
  }

  const nodeShapes = formPropertyData.shape.nodeShapes;
  if (nodeShapes.length === 0) {
    console.info(`form property ${formPropertyData.id} has no node shapes`);
    return null;
  } else if (nodeShapes.length > 1) {
    console.info(
      `form property ${formPropertyData.id} has ${nodeShapes.length} node shapes`
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
                dataset: formPropertyData.dataGraph,
                node: value as BlankNode | NamedNode,
              }) ?? `${formPropertyData.label} ${valueI + 1}`}
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
            <FormNodeDataViewer
              formNodeData={
                new FormNodeData({
                  dataGraph: formPropertyData.dataGraph,
                  dataGraphNode: value as BlankNode | NamedNode,
                  shape: nodeShape,
                })
              }
              formPropertyDataViewerFactory={formPropertyDataViewerFactory}
              iconFactory={iconFactory}
            />
          </View>
        </ListItem.Accordion>
      ))}
    </View>
  );
};
