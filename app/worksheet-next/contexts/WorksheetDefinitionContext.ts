import React from "react";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";

export const WorksheetDefinitionContext = React.createContext<WorksheetDefinition | null>(
  null
);
