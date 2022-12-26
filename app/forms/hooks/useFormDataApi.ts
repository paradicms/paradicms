import {FormDataApi} from "../api/FormDataApi";
import {useEffect, useReducer} from "react";
import {AsyncStorageFormDataApi} from "../api/AsyncStorageFormDataApi";
import {useFormShapeApi} from "./useFormShapeApi";

export interface ReducerAction {
  payload: FormDataApi;
}

interface ReducerState {
  formDataApi: FormDataApi | null;
}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  return {formDataApi: action.payload!};
};

export const useFormDataApi = (): {formDataApi: FormDataApi | null} => {
  const {formShapeApi} = useFormShapeApi();

  const [state, dispatch] = useReducer(reducer, {
    formDataApi: null,
  });

  useEffect(() => {
    if (!formShapeApi) {
      return;
    }

    if (state.formDataApi) {
      return;
    }

    dispatch({payload: new AsyncStorageFormDataApi(formShapeApi)});
  }, [formShapeApi]);

  return {formDataApi: state.formDataApi};
};
