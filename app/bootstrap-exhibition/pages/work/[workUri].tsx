import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {
  Configuration,
  Dataset,
  DataSubsetter,
  DCTERMS,
  License,
  RightsStatement,
} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  readConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import Link from "next/link";
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {WorkImagesCarousel} from "@paradicms/bootstrap";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: Configuration;
  readonly currentWorkUri: string;
  readonly datasetString: string;
  readonly nextWorkUri: string | null;
  readonly previousWorkUri: string | null;
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
      <td>{value}</td>
    </tr>
  );
};

const WorkPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  currentWorkUri,
  datasetString,
  nextWorkUri,
  previousWorkUri,
}) => {
  const dataset = useMemo<Dataset>(() => Dataset.parse(datasetString), [
    datasetString,
  ]);
  const collection = useMemo(() => dataset.collectionByUri(collectionUri), [
    collectionUri,
    dataset,
  ]);
  const currentWork = useMemo(() => dataset.workByUri(currentWorkUri), [
    currentWorkUri,
    dataset,
  ]);
  const institution = useMemo(() => collection.institution, [collection]);
  const nextWork = useMemo(
    () => (nextWorkUri ? dataset.workByUri(nextWorkUri) : null),
    [nextWorkUri, dataset]
  );
  const previousWork = useMemo(
    () => (previousWorkUri ? dataset.workByUri(previousWorkUri) : null),
    [nextWorkUri, dataset]
  );

  const abstract: string | null = useMemo(() => {
    if (currentWork.abstract) {
      return currentWork.abstract;
    } else if (currentWork.properties) {
      for (const property of currentWork.properties) {
        if (property.uri === DCTERMS.description.value) {
          return property.value.value.toString();
        }
      }
      return null;
    } else {
      return null;
    }
  }, [currentWork]);

  const rights = useMemo(
    () => currentWork.rights ?? institution.rights ?? null,
    [currentWork, institution]
  );

  const licenseValue = useMemo(() => {
    if (!rights || !rights.license) {
      return null;
    }
    if (typeof rights.license === "string") {
      return rights.license as string;
    }
    const license = rights.license as License;
    return <a href={license.uri}>{license.title}</a>;
  }, [rights]);

  const rightsStatementValue = useMemo(() => {
    if (!rights || !rights.statement) {
      return null;
    }
    if (typeof rights.statement === "string") {
      return rights.statement as string;
    }
    const rightsStatement = rights.statement as RightsStatement;
    return <a href={rightsStatement.uri}>{rightsStatement.prefLabel}</a>;
  }, [rights]);

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      work={currentWork}
    >
      <Container fluid>
        <Row>
          {currentWork.images.length > 0 ? (
            <Col
              className="d-flex justify-content-center pl-0 pr-0"
              xs={12}
              sm={12}
              lg={8}
              xl={6}
              style={{minHeight: 600, minWidth: 600}}
            >
              <WorkImagesCarousel work={currentWork} />
            </Col>
          ) : null}
          <Col
            className="d-flex justify-content-center pl-0 pr-0 pt-2"
            xs={12}
            sm={12}
            lg={currentWork.images.length > 0 ? 4 : 12}
            xl={currentWork.images.length > 0 ? 6 : 12}
          >
            <Container fluid>
              <Row>
                <Col className="p-0" xs={12}>
                  <h1>{currentWork.title}</h1>
                </Col>
              </Row>
              {abstract ? (
                <Row className="mt-2">
                  <Col
                    className="p-0 text-wrap"
                    xs={12}
                    dangerouslySetInnerHTML={{__html: abstract}}
                  ></Col>
                </Row>
              ) : null}
              {rights ? (
                <Row className="mt-4">
                  <Col className="p-0" xs={12}>
                    <Table striped>
                      <tbody>
                        {rights ? (
                          <>
                            <RightsTableRow
                              label="Rights statement"
                              value={rightsStatementValue}
                            />
                            <RightsTableRow
                              label="Rights holder"
                              value={rights?.holder}
                            />
                            <RightsTableRow
                              label="License"
                              value={licenseValue}
                            />
                          </>
                        ) : null}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              ) : null}
            </Container>
          </Col>
        </Row>
        {nextWork || previousWork ? (
          <Row className="mt-4">
            <Col xs={12}>
              <Pagination
                size="lg"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {previousWork ? (
                  <PaginationItem>
                    <Link href={Hrefs.work(previousWork.uri)} passHref>
                      <PaginationLink previous>
                        {"‹ " + previousWork.title}
                      </PaginationLink>
                    </Link>
                  </PaginationItem>
                ) : null}
                {nextWork ? (
                  <PaginationItem>
                    <Link href={Hrefs.work(nextWork.uri)} passHref>
                      <PaginationLink next>
                        {nextWork.title + " ›"}
                      </PaginationLink>
                    </Link>
                  </PaginationItem>
                ) : null}
              </Pagination>
            </Col>
          </Row>
        ) : null}
      </Container>
    </Layout>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {workUri: string}}[] = [];

  for (const work of readDatasetFile(readFileSync).works) {
    paths.push({
      params: {
        workUri: encodeFileName(work.uri),
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
  const workUri = decodeFileName(params!.workUri as string);

  const dataset = readDatasetFile(readFileSync);
  const currentWork = dataset.workByUri(workUri);
  const collectionUri = currentWork.collectionUris[0];
  const collectionWorks = dataset.collectionWorks(collectionUri);

  let nextWorkUri: string | null = null;
  let previousWorkUri: string | null = null;
  for (let workI = 0; workI < collectionWorks.length; workI++) {
    const work = collectionWorks[workI];
    if (work.uri !== workUri) {
      continue;
    }

    if (workI > 0) {
      previousWorkUri = dataset.works[workI - 1].uri;
    }

    if (workI + 1 < dataset.works.length) {
      nextWorkUri = dataset.works[workI + 1].uri;
    }

    break;
  }

  const workUris: string[] = [];
  if (previousWorkUri) {
    workUris.push(previousWorkUri);
  }
  workUris.push(workUri);
  if (nextWorkUri) {
    workUris.push(nextWorkUri);
  }

  return {
    props: {
      collectionUri,
      configuration: readConfigurationFile(readFileSync),
      currentWorkUri: workUri,
      datasetString: new DataSubsetter(dataset)
        .worksDataset(workUris, {
          allImages: true,
          collections: {},
          institution: {},
        })
        .stringify(),
      nextWorkUri,
      previousWorkUri,
    },
  };
};
