import * as React from "react";
import {Text as DefaultText} from "react-native";
import {ThemedTextProps} from "./ThemedTextProps";
import {useThemeColor} from "../hooks/useThemeColor";

export const ThemedText: React.FunctionComponent<ThemedTextProps> = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}) => {
  const color = useThemeColor({light: lightColor, dark: darkColor}, "text");
  return <DefaultText style={[{color}, style]} {...otherProps} />;
};
