import React from "react";
import {StyleSheet, View} from "react-native";

export const CenteredView: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
