import React = require("react");
import {WorksheetDefinition} from "~/models/WorksheetDefinition";

export const WorksheetDefinitionContext =
  React.createContext<WorksheetDefinition | null>(null);
