import * as React from "react";
import {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormShapeApi} from "../hooks/useFormShapeApi";
import {AppFormShapeSummary} from "../models/AppFormShapeSummary";
import {Button, ListItem} from "@rneui/themed";

export const FormShapeSummariesViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormShapeSummariesViewerScreen"
>> = ({navigation, route}) => {
  const {formShapeApi} = useFormShapeApi();
  const [formShapeSummaries, setFormShapeSummaries] = useState<
    readonly AppFormShapeSummary[] | null
  >(null);

  useEffect(() => {
    if (formShapeApi) {
      formShapeApi.getFormShapeSummaries().then(setFormShapeSummaries);
    }
  }, [formShapeApi]);

  if (!formShapeSummaries) {
    return null;
  }

  return (
    <View style={styles.container}>
      {formShapeSummaries.map(formShapeSummary => (
        <ListItem key={formShapeSummary.id}>
          <Button
            onPress={() =>
              navigation.navigate("FormDataSummariesViewerScreen", {
                formShapeId: formShapeSummary.id,
              })
            }
            title={formShapeSummary.label}
          />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
