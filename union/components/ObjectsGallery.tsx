import {ObjectsGallery as WrappedObjectsGallery} from "@paradicms/material-ui";
import {JoinedObject} from "@paradicms/models";
import {Hrefs} from "lib/Hrefs";
import * as React from "react";
import {NumberParam, useQueryParam} from "use-query-params";
import {Link} from "@paradicms/material-ui-next";

export const ObjectsGallery: React.FunctionComponent<{
  objects: readonly JoinedObject[];
  renderInstitution?: boolean;
}> = ({objects, renderInstitution}) => {
  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = pageQueryParam ?? 0;

  if (objects.length === 0) {
    return <h4 style={{textAlign: "center"}}>No matching objects found.</h4>;
  }

  return (
    <WrappedObjectsGallery
      objects={objects}
      onChangePage={setPage}
      page={page}
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
    />
  );
};
