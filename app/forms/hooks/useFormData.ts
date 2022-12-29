import {useCallback, useEffect, useState} from "react";
import {useFormDataApi} from "./useFormDataApi";
import {AppFormData} from "../models/AppFormData";

export const useFormData = (
  formDataId: string
): {
  error: any | null;
  formData: AppFormData | null;
  saveFormData: () => void;
} => {
  const [error, setError] = useState<any>(null);
  const {formDataApi} = useFormDataApi();
  const [formData, setFormData] = useState<AppFormData | null>(null);

  useEffect(() => {
    if (formDataApi && !formData && !error) {
      formDataApi.getFormData(formDataId).then(setFormData, setError);
    }
  }, [formDataApi]);

  const saveFormData = useCallback(() => {
    formDataApi!.putFormData(formData!).catch(setError);
  }, [formData, formDataApi]);

  return {formData, error, saveFormData};
};
