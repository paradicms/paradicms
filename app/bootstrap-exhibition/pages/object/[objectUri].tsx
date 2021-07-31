import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {
  Configuration,
  Dataset,
  defaultConfiguration,
  IndexedDataset,
  JoinedDataset,
  License,
  RightsStatement,
} from "@paradicms/models";
import {decodeFileName, encodeFileName} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import Link from "next/link";
import {Col, Container, Pagination, PaginationItem, PaginationLink, Row, Table} from "reactstrap";
import {ObjectImagesCarousel} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import {DCTERMS} from "@paradicms/rdf";
import {readDataset} from "lib/readDataset";

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: Configuration;
  readonly currentObjectUri: string;
  readonly dataset: Dataset;
  readonly nextObjectUri: string | null;
  readonly previousObjectUri: string | null;
}

const RightsTableRow: React.FunctionComponent<{
  label: string;
  value: React.ReactNode;
}> = ({label, value}) => {
  if (!value) {
    return null;
  }
  return (
    <tr>
      <td>
        <strong>{label}</strong>
      </td>
      <td>
        {value}
      </td>
    </tr>
  );
};

const ObjectPage: React.FunctionComponent<StaticProps> = ({
                                                            collectionUri,
                                                            configuration,
                                                            currentObjectUri,
                                                            dataset,
                                                            nextObjectUri,
                                                            previousObjectUri,
                                                          }) => {
  const joinedDataset = useMemo(() => JoinedDataset.fromDataset(dataset), [dataset]);
  const collection = useMemo(() => joinedDataset.collectionByUri(collectionUri), [collectionUri, joinedDataset]);
  const currentObject = useMemo(() => joinedDataset.objectByUri(currentObjectUri), [currentObjectUri, joinedDataset]);
  const institution = useMemo(() => collection.institution, [collection]);
  const nextObject = useMemo(() => nextObjectUri ? joinedDataset.objectByUri(nextObjectUri) : null, [nextObjectUri, joinedDataset]);
  const previousObject = useMemo(() => previousObjectUri ? joinedDataset.objectByUri(previousObjectUri) : null, [nextObjectUri, joinedDataset]);

  const abstract: string | null = useMemo(() => {
    if (currentObject.abstract) {
      return currentObject.abstract;
    } else if (currentObject.properties) {
      for (const property of currentObject.properties) {
        if (property.uri === DCTERMS.description.value) {
          return property.value.toString();
        }
      }
      return null;
    } else {
      return null;
    }
  }, [currentObject]);

  const rights = useMemo(() => currentObject.rights ?? institution.rights ?? null, [currentObject, institution]);

  const licenseValue = useMemo(() => (): React.ReactNode | null => {
    if (!rights || !rights.license) {
      return null;
    }
    if (typeof (rights.license) === "string") {
      return rights.license as string;
    }
    const license = rights.license as License;
    return <a href={license.uri}>{license.title}</a>;
  }, [rights]);

  const rightsStatementValue = useMemo(() => (): React.ReactNode | null => {
    if (!rights || !rights.statement) {
      return null;
    }
    if (typeof (rights.statement) === "string") {
      return rights.statement as string;
    }
    const rightsStatement = rights.statement as RightsStatement;
    return <a href={rightsStatement.uri}>{rightsStatement.prefLabel}</a>;
  }, [rights]);

  return (
    <Layout collection={collection} configuration={configuration} object={currentObject}>
      <Container fluid>
        <Row>
          {currentObject.images.length > 0 ?
            <Col className="d-flex justify-content-center pl-0 pr-0" xs={12} sm={12} lg={8} xl={6}
                 style={{minHeight: 600, minWidth: 600}}>
              <ObjectImagesCarousel object={currentObject} />
            </Col> : null}
          <Col className="d-flex justify-content-center pl-0 pr-0 pt-2" xs={12} sm={12}
               lg={currentObject.images.length > 0 ? 4 : 12} xl={currentObject.images.length > 0 ? 6 : 12}>
            <Container fluid>
              <Row>
                <Col className="p-0" xs={12}>
                  <h1>{currentObject.title}</h1>
                </Col>
              </Row>
              {abstract ?
                <Row className="mt-2">
                  <Col className="p-0 text-wrap" xs={12} dangerouslySetInnerHTML={{__html: abstract}}></Col>
                </Row>
                : null}
              {rights ?
                <Row className="mt-4">
                  <Col className="p-0" xs={12}>
                    <Table striped>
                      <tbody>
                      {rights ? <>
                        <RightsTableRow
                          label="Rights statement"
                          value={rightsStatementValue}
                        />
                        <RightsTableRow
                          label="Rights holder"
                          value={rights?.holder?.value}
                        />
                        <RightsTableRow
                          label="License"
                          value={licenseValue}
                        />
                      </> : null}
                      </tbody>
                    </Table>
                  </Col>
                </Row> : null}
            </Container>
          </Col>
        </Row>
        {nextObject || previousObject ?
          <Row className="mt-4">
            <Col xs={12}>
              <Pagination size="lg" style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                {previousObject ?
                  <PaginationItem>
                    <Link
                      href={Hrefs.object(previousObject.uri)}
                      passHref><PaginationLink previous>{"‹ " + previousObject.title}</PaginationLink></Link>
                  </PaginationItem> : null}
                {nextObject ?
                  <PaginationItem><Link
                    href={Hrefs.object(nextObject.uri)} passHref><PaginationLink next>{nextObject.title + " ›"}</PaginationLink></Link>
                  </PaginationItem> : null}
              </Pagination></Col></Row> : null}
      </Container>
    </Layout>
  );
};

export default ObjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {objectUri: string}}[] = [];


  for (const object of readDataset().objects) {
    paths.push({
      params: {
        objectUri: encodeFileName(object.uri),
      },
    });
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
                                                       params,
                                                     }): Promise<{props: StaticProps}> => {
  const objectUri = decodeFileName(params!.objectUri as string);

  const dataset = readDataset();
  const indexedDataset = new IndexedDataset(dataset);
  const currentObject = indexedDataset.objectByUri(objectUri);
  const collectionUri = currentObject.collectionUris[0];
  const collectionObjects = indexedDataset.collectionObjects(collectionUri);

  let nextObjectUri: string | null = null;
  let previousObjectUri: string | null = null;
  for (let objectI = 0; objectI < collectionObjects.length; objectI++) {
    const object = collectionObjects[objectI];
    if (object.uri !== objectUri) {
      continue;
    }

    if (objectI > 0) {
      previousObjectUri = dataset.objects[objectI - 1].uri;
    }

    if (objectI + 1 < dataset.objects.length) {
      nextObjectUri = dataset.objects[objectI + 1].uri;
    }

    break;
  }

  const objectUris: string[] = [];
  if (previousObjectUri) {
    objectUris.push(previousObjectUri);
  }
  objectUris.push(objectUri);
  if (nextObjectUri) {
    objectUris.push(nextObjectUri);
  }

  return {
    props: {
      collectionUri,
      configuration: defaultConfiguration,
      currentObjectUri: objectUri,
      dataset: indexedDataset.objectsDataset(objectUris),
      nextObjectUri,
      previousObjectUri,
    },
  };
};
