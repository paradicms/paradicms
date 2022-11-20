import * as React from "react";
import {View as DefaultView} from "react-native";
import {useThemeColor} from "../hooks/useThemeColor";
import {ThemeProps} from "./ThemeProps";

type ViewProps = ThemeProps & DefaultView["props"];

export const ThemedView: React.FunctionComponent<ThemeProps &
  DefaultView["props"]> = ({style, lightColor, darkColor, ...otherProps}) => {
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    "background"
  );

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
};
