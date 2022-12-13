import {IconFactory} from "@paradicms/react-native-shacl-forms";
import {FontAwesome} from "@expo/vector-icons";
import * as React from "react";

export const fontAwesomeIconFactory: IconFactory = props => (
  // @ts-ignore
  <FontAwesome {...props} />
);
