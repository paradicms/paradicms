import * as React from "react";
import {useContext} from "react";
import {ObjectQueryServiceContext} from "~/contexts/ObjectQueryServiceContext";
import {ObjectSearchPage} from "@paradicms/react-services";
import {ObjectSearchContainer} from "@paradicms/bootstrap";

const OBJECTS_PER_PAGE = 10;

export const Application: React.FunctionComponent = () => {
  const objectQueryService = useContext(ObjectQueryServiceContext);

  return (
    <ObjectSearchPage
      objectQueryService={objectQueryService}
      objectsPerPage={OBJECTS_PER_PAGE}
    >
      {objectSearchProps => (
        <ObjectSearchContainer
          {...objectSearchProps}
          objectsPerPage={OBJECTS_PER_PAGE}
          renderObjectLink={(object, children) => (
            <a href={object.page ?? object.uri}>{children}</a>
          )}
        />
      )}
    </ObjectSearchPage>
  );
};
