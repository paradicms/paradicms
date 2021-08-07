import {Col, Container, Row} from "reactstrap";
import * as React from "react";
import {
  JoinedDataset,
  JoinedInstitution,
  JoinedObject,
  ObjectQuery,
  ObjectQueryResults,
} from "@paradicms/models";
import {FiltersControls} from "./FiltersControls";
import {FiltersBadges} from "./FiltersBadges";
import {ObjectsGallery} from "./ObjectsGallery";

export const ObjectSearchContainer: React.FunctionComponent<{
  objectQuery: ObjectQuery;
  objectQueryResults: ObjectQueryResults;
  objectQueryResultsJoinedDataset: JoinedDataset;
  objectsPerPage: number;
  page: number;
  renderInstitutionLink?: (
    institution: JoinedInstitution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode
  ) => React.ReactNode;
  setObjectQuery: (objectQuery: ObjectQuery) => void;
  setPage: (page: number | undefined) => void;
}> = ({
  objectQuery,
  objectQueryResults,
  objectQueryResultsJoinedDataset,
  objectsPerPage,
  page,
  renderInstitutionLink,
  renderObjectLink,
  setObjectQuery,
  setPage,
}) => (
  <Container fluid>
    {objectQueryResults.totalObjectsCount > 0 ? (
      <>
        <Row>
          <Col xs={12}>
            <h4 className="d-inline-block">
              <span>{objectQueryResults.totalObjectsCount}</span>&nbsp;
              <span>
                {objectQueryResults.totalObjectsCount === 1
                  ? "object"
                  : "objects"}
              </span>
              &nbsp;
              {objectQuery.text ? (
                <span>
                  matching <i>{objectQuery.text}</i>
                </span>
              ) : (
                <span>matched</span>
              )}
            </h4>
            {objectQuery.filters.length > 0 ? (
              <div className="d-inline-block">
                <FiltersBadges filters={objectQuery.filters} />
              </div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <hr />
          </Col>
        </Row>
      </>
    ) : null}
    <Row>
      <Col xs="2">
        <FiltersControls
          facets={objectQueryResults.facets}
          filters={objectQuery.filters}
          onChange={newFilters => {
            setObjectQuery({
              ...objectQuery,
              filters: newFilters,
            });
            setPage(undefined);
          }}
        />
      </Col>
      <Col xs="10">
        {objectQueryResultsJoinedDataset.objects.length > 0 ? (
          <ObjectsGallery
            objects={objectQueryResultsJoinedDataset.objects}
            objectsPerPage={objectsPerPage}
            objectsTotalCount={objectQueryResults.totalObjectsCount}
            onChangePage={setPage}
            page={page}
            renderInstitutionLink={renderInstitutionLink}
            renderObjectLink={renderObjectLink}
          />
        ) : (
          <h3>No matching objects found.</h3>
        )}
      </Col>
    </Row>
  </Container>
);
