import * as React from "react";
import {useState} from "react";
import {FormNode, FormProperty} from "@paradicms/shacl-forms";
import {ListItem, Text, useTheme} from "@rneui/themed";
import {IconFactory} from "./IconFactory";
import {StyleSheet, View} from "react-native";

export const FormNodeLayout: React.FunctionComponent<{
  formNode: FormNode;
  formPropertyWidgetFactory: (kwds: {
    formProperty: FormProperty;
    iconFactory: IconFactory;
  }) => React.ReactElement | null;
  iconFactory: IconFactory;
}> = ({formNode, formPropertyWidgetFactory, iconFactory}) => {
  const formProperties = formNode.properties;
  const [expandedFormPropertyIds, setExpandedFormPropertyIds] = useState<
    readonly string[]
  >(formProperties.map(formProperty => formProperty.id));
  const {theme} = useTheme();

  if (formProperties.length === 0) {
    return null;
  }

  return (
    <>
      {formNode.properties.map((formProperty, formPropertyI) => (
        <ListItem.Accordion
          bottomDivider={formPropertyI + 1 < formProperties.length}
          content={
            <Text key={0}>
              Property: <Text style={styles.label}>{formProperty.label}</Text>
            </Text>
          }
          containerStyle={{marginBottom: theme.spacing.xs}}
          expandIcon={iconFactory({name: "chevron-up"})}
          key={formProperty.id}
          icon={iconFactory({name: "chevron-down"})}
          isExpanded={expandedFormPropertyIds.some(
            formPropertyId => formPropertyId === formProperty.id
          )}
          onPress={() => {
            const filteredExpandedFormPropertyIds = expandedFormPropertyIds.filter(
              formPropertyId => formPropertyId !== formProperty.id
            );
            if (
              filteredExpandedFormPropertyIds.length <
              expandedFormPropertyIds.length
            ) {
              // Was expanded, un-expand
              setExpandedFormPropertyIds(filteredExpandedFormPropertyIds);
            } else {
              // Was not expanded, expand
              setExpandedFormPropertyIds(
                expandedFormPropertyIds.concat(formProperty.id)
              );
            }
          }}
        >
          <View
            style={{
              marginLeft: theme.spacing.xl,
              marginBottom:
                formPropertyI + 1 < formProperties.length
                  ? theme.spacing.xl
                  : undefined,
            }}
          >
            {formPropertyWidgetFactory({formProperty, iconFactory})}
          </View>
        </ListItem.Accordion>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
});
