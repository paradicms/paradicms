import * as React from "react";
import {Configuration} from "~/models/Configuration";

export const ConfigurationContext = React.createContext<Configuration>({
  filters: [],
});
