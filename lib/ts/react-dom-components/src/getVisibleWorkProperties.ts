import {Property, Work} from "@paradicms/models";
import {WorkProperty} from "./WorkProperty";

export const getVisibleWorkProperties = (kwds: {
  properties: readonly Property[];
  work: Work;
}): readonly WorkProperty[] => {
  const {properties, work} = kwds;
  const workProperties: WorkProperty[] = [];
  for (const property of properties) {
    if (property.hidden) {
      continue;
    }
    for (const propertyIri of property.iris) {
      const values = work.propertyValuesByPropertyIri(propertyIri);
      if (values.length === 0) {
        continue;
      }
      workProperties.push({
        property,
        values,
      });
    }
  }
  return workProperties;
};
