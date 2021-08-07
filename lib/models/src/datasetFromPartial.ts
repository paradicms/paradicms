import {Dataset} from "./Dataset";

export const datasetFromPartial = (partialDataset: Partial<Dataset>): Dataset => {
  return {
    collections: partialDataset.collections ?? [],
    images: partialDataset.images ?? [],
    institutions: partialDataset.institutions ?? [],
    licenses: partialDataset.licenses ?? [],
    objects: partialDataset.objects ?? [],
    propertyDefinitions: partialDataset.propertyDefinitions ?? [],
    rightsStatements: partialDataset.rightsStatements ?? [],
  };
};
