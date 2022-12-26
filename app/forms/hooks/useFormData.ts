import {FormData} from "@paradicms/shacl-forms";
import {useCallback, useEffect, useReducer} from "react";
import {testAppFormDataFactory} from "../data/testAppFormDataFactory";

export interface FormDataReducerAction {
  payload: FormData;
}

interface FormDataReducerState {
  formData: FormData | null;
}

const formDataReducer = (
  state: FormDataReducerState,
  action: FormDataReducerAction
): FormDataReducerState => {
  return {formData: action.payload!};
};

export const useFormData = (): {
  dispatchFormData: () => void;
  formData: FormData | null;
} => {
  const [state, dispatchFormDataToReducer] = useReducer(formDataReducer, {
    formData: null,
  });

  useEffect(() => {
    if (state.formData) {
      return;
    }

    dispatchFormDataToReducer({payload: testAppFormDataFactory});
  }, []);

  const dispatchFormData: () => void = useCallback(() => {
    if (state.formData) {
      dispatchFormDataToReducer({payload: state.formData});
    } else {
      console.error("called dispatchFormData when formData is not set");
    }
  }, [state, dispatchFormDataToReducer]);

  return {dispatchFormData, formData: state.formData};
};
