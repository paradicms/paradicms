import * as React from "react";
import {useMemo, useState} from "react";
import {Layout} from "components/Layout";
import {
  Agent,
  Configuration,
  Dataset,
  DataSubsetter,
  DCTERMS,
  Image,
  Rights,
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
} from "reactstrap";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {
  thumbnailTargetDimensions,
  WorkImagesCarousel,
} from "@paradicms/bootstrap";
import {RightsParagraph} from "../../components/RightsParagraph";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();
const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "x-small",
  marginBottom: 0,
};

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: Configuration;
  readonly currentWorkUri: string;
  readonly datasetString: string;
  readonly nextWorkUri: string | null;
  readonly previousWorkUri: string | null;
}

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

  const currentWorkAbstract: string | null = useMemo(() => {
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

  const currentWorkRights: Rights | null = useMemo(
    () => currentWork.rights ?? institution.rights ?? null,
    [currentWork, institution]
  );

  const currentWorkCreatorAgent: Agent | null = useMemo(() => {
    const creator = currentWorkRights?.creator;
    return creator && creator instanceof Agent ? (creator as Agent) : null;
  }, [currentWorkRights]);
  console.log("Creator agent:", currentWorkCreatorAgent?.name);

  // @ts-ignore
  const currentWorkCreatorAgentThumbnail: Image | null = useMemo(
    () =>
      currentWorkCreatorAgent?.thumbnail({
        targetDimensions: thumbnailTargetDimensions,
      }) ?? null,
    [currentWorkCreatorAgent]
  );
  console.log("Creator agent thumbnail", currentWorkCreatorAgentThumbnail?.uri);

  const [currentImage, setCurrentImage] = useState<Image | null>(null);

  const currentImageRights = useMemo(() => currentImage?.rights ?? null, [
    currentImage,
  ]);

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
              className="d-flex justify-content-center px-0"
              xs={12}
              sm={12}
              lg={8}
              xl={6}
              style={{minHeight: 600, minWidth: 600}}
            >
              <WorkImagesCarousel
                hideImageRights={true}
                onShowImage={setCurrentImage}
                work={currentWork}
              />
            </Col>
          ) : null}
          <Col
            className="d-flex justify-content-center px-0 pt-2"
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
              {currentWorkAbstract ? (
                <Row className="mt-2">
                  <Col
                    className="pl-0 text-wrap"
                    xs={12}
                    dangerouslySetInnerHTML={{__html: currentWorkAbstract}}
                  ></Col>
                </Row>
              ) : null}
              {currentWorkCreatorAgent && currentWorkCreatorAgentThumbnail ? (
                <Row className="mt-2">
                  <Col className="pl-0" xs={12}>
                    <img
                      src={
                        currentWorkCreatorAgentThumbnail.src ??
                        currentWorkCreatorAgentThumbnail.uri
                      }
                      style={{
                        maxHeight: thumbnailTargetDimensions.height,
                        maxWidth: thumbnailTargetDimensions.width,
                      }}
                      title={currentWorkCreatorAgent.name}
                    />
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
        {currentImageRights || currentWorkRights ? (
          <Row>
            <Col style={{textAlign: "center"}} xs={12}>
              {currentImageRights ? (
                <RightsParagraph
                  material="Image"
                  rights={currentImageRights}
                  style={RIGHTS_STYLE}
                />
              ) : null}
              {currentWorkRights ? (
                <RightsParagraph
                  material="Text"
                  rights={currentWorkRights}
                  style={RIGHTS_STYLE}
                />
              ) : null}
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
          agent: {
            thumbnail: {targetDimensions: thumbnailTargetDimensions},
          },
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
