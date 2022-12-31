import * as React from "react";
import {FormNodeData, FormNodeTypeData} from "@paradicms/shacl-forms";
import {FormModelSummariesViewer} from "./FormModelSummariesViewer";

export const FormNodeTypeDataViewer: React.FunctionComponent<{
  formNodeTypeData: FormNodeTypeData;
  onSelectFormNodeData: (formNodeData: FormNodeData) => void;
}> = ({formNodeTypeData, onSelectFormNodeData}) => (
  <FormModelSummariesViewer
    formModelSummaries={formNodeTypeData.nodes}
    onSelect={onSelectFormNodeData}
  />
);
