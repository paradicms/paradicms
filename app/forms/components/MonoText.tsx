import React from "react";
import {ThemedTextProps} from "./ThemedTextProps";
import {ThemedText} from "./ThemedText";

export const MonoText: React.FunctionComponent<ThemedTextProps> = props => (
  <ThemedText {...props} style={[props.style, {fontFamily: "space-mono"}]} />
);
