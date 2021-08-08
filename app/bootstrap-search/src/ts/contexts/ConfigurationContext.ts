import * as React from "react";
import {Configuration, defaultConfiguration} from "@paradicms/models";

export const ConfigurationContext = React.createContext<Configuration>(
  defaultConfiguration
);
