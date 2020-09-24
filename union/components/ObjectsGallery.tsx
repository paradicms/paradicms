import {ObjectsGallery as WrappedObjectsGallery} from "@paradicms/material-ui";
import {JoinedObject} from "@paradicms/models";
import {Hrefs} from "lib/Hrefs";
import * as React from "react";
import {NumberParam, useQueryParam} from "use-query-params";
import {Link} from "@paradicms/next";

const OBJECTS_PER_PAGE = 10;

export const ObjectsGallery: React.FunctionComponent<{
  joinedObjects: readonly JoinedObject[];
  renderInstitution?: boolean;
}> = ({joinedObjects, renderInstitution}) => {
  let [objectsPageQueryParam, setObjectsPage] = useQueryParam<
    number | null | undefined
  >("page", NumberParam);
  const objectsPage = objectsPageQueryParam ?? 0;

  if (joinedObjects.length === 0) {
    return <h4 style={{textAlign: "center"}}>No matching objects found.</h4>;
  }

  return (
    <WrappedObjectsGallery
      currentPage={objectsPage}
      renderInstitutionLink={
        renderInstitution
          ? (institution, children) => (
              <Link {...Hrefs.institution(institution.uri).home}>
                {children}
              </Link>
            )
          : undefined
      }
      renderObjectLink={(object, children) => (
        <Link {...Hrefs.institution(object.institution.uri).object(object.uri)}>
          {children}
        </Link>
      )}
      maxPage={Math.ceil(joinedObjects.length / OBJECTS_PER_PAGE) - 1}
      objects={joinedObjects.slice(
        objectsPage * OBJECTS_PER_PAGE,
        (objectsPage + 1) * OBJECTS_PER_PAGE
      )}
      objectsPerPage={OBJECTS_PER_PAGE}
      objectsTotal={joinedObjects.length}
      onChangePage={setObjectsPage}
    />
  );
};
