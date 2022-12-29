import {AppFormModelSummary} from "../models/AppFormModelSummary";

export type FormStackParamList = {
  FormErrorScreen: {
    formData: AppFormModelSummary | null;
    formNodeData: AppFormModelSummary | null;
    formNodeTypeData: AppFormModelSummary | null;
    error: any;
  };
  FormNodeDataEditorScreen: {
    formData: AppFormModelSummary;
    formNodeData: AppFormModelSummary;
    formNodeTypeData: AppFormModelSummary;
  };
  FormNodeTypeDataViewerScreen: {
    formData: AppFormModelSummary;
    formNodeTypeData: AppFormModelSummary;
  };
  FormNodeDataViewerScreen: {
    formData: AppFormModelSummary;
    formNodeData: AppFormModelSummary;
    formNodeTypeData: AppFormModelSummary;
  };
  FormDataSummariesViewerScreen: {formShape: AppFormModelSummary};
  FormDataViewerScreen: {formData: AppFormModelSummary};
  FormShapeSummariesViewerScreen: undefined;
};
