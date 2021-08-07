import * as React from "react";
import {useMemo} from "react";
import {
  Dataset,
  IndexedDataset,
  ObjectJoinSelector,
  ObjectSearchConfiguration,
} from "@paradicms/models";
import {ObjectQueryService} from "@paradicms/services";
import {LunrObjectQueryService} from "@paradicms/lunr";
import {ObjectSearchPageProps} from "./ObjectSearchPageProps";
import {ObjectSearchPage} from "./ObjectSearchPage";

interface Props extends Omit<ObjectSearchPageProps, "objectQueryService"> {
  configuration: ObjectSearchConfiguration;
  dataset: Dataset;
  objectJoinSelector: ObjectJoinSelector;
}

export const LunrObjectSearchPage: React.FunctionComponent<Props> = ({
  configuration,
  dataset,
  objectJoinSelector,
  ...objectSearchPageProps
}) => {
  const objectQueryService = useMemo<ObjectQueryService>(
    () =>
      new LunrObjectQueryService({
        configuration: configuration,
        dataset: new IndexedDataset(dataset),
        objectJoinSelector,
      }),
    [configuration, dataset, objectJoinSelector]
  );

  return (
    <ObjectSearchPage
      objectQueryService={objectQueryService}
      {...objectSearchPageProps}
    />
  );
};
