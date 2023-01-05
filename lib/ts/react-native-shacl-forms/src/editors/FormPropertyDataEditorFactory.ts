import {FormPropertyData} from "@paradicms/shacl-forms";
import * as React from "react";
import {IconFactory} from "../IconFactory";

export type FormPropertyDataEditorFactory = (kwds: {
  formPropertyData: FormPropertyData;
  iconFactory: IconFactory;
  onChange: () => void;
}) => React.ReactElement | null;
