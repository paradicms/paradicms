import * as React from "react";
import {useCallback, useMemo, useState} from "react";
import {Layout} from "components/Layout";
import {
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
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {
  thumbnailTargetDimensions,
  WorkImagesCarousel,
} from "@paradicms/bootstrap";
import {RightsParagraph} from "../../components/RightsParagraph";
import {getWorkAgentProfiles} from "../../lib/getWorkAgentProfiles";
import {WorkAgentProfilesContainer} from "../../components/WorkAgentProfilesContainer";
import Hammer from "react-hammerjs";
import {useRouter} from "next/router";

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
  const router = useRouter();

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

  const currentWorkAgentProfiles = useMemo(
    () =>
      getWorkAgentProfiles({
        institution,
        work: currentWork,
      }),
    [currentWork, institution]
  );

  const [currentImage, setCurrentImage] = useState<Image | null>(null);

  const currentImageRights = useMemo(() => currentImage?.rights ?? null, [
    currentImage,
  ]);

  const leftColNavTabs: {content: React.ReactNode; title: string}[] = [];
  if (currentWork.images.length > 0) {
    leftColNavTabs.push({
      title: currentWork.title,
      content: (
        <div className="text-center">
          <WorkImagesCarousel
            hideImageRights={true}
            key={leftColNavTabs.length}
            onShowImage={setCurrentImage}
            work={currentWork}
          />
        </div>
      ),
    });
  }
  if (currentWorkAgentProfiles.length > 0) {
    leftColNavTabs.push({
      title: "People and Organizations",
      content: (
        <WorkAgentProfilesContainer
          key={leftColNavTabs.length}
          workAgentProfiles={currentWorkAgentProfiles}
        />
      ),
    });
  }

  const [activeLeftColNavTabIndex, setActiveLeftColNavTabIndex] = useState(0);

  const onGoToNextWork = useCallback(() => {
    if (nextWorkUri) {
      router.push(Hrefs.work(nextWorkUri));
    }
  }, [nextWorkUri, router]);

  const onGoToPreviousWork = useCallback(() => {
    if (previousWorkUri) {
      router.push(Hrefs.work(previousWorkUri));
    }
  }, [previousWorkUri, router]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      switch (e.keyCode) {
        case 37:
          // Left arrow
          onGoToPreviousWork();
          break;
        case 39:
          // Right arrow
          onGoToNextWork();
          break;
        default:
          break;
      }
    },
    [onGoToNextWork, onGoToPreviousWork]
  );

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      work={currentWork}
    >
      <Hammer onSwipeLeft={onGoToPreviousWork} onSwipeRight={onGoToNextWork}>
        <div>
          <div onKeyDown={onKeyDown} style={{outline: "none"}} tabIndex={0}>
            <Container fluid>
              <Row>
                {leftColNavTabs.length > 0 ? (
                  <Col
                    xs={12}
                    sm={12}
                    lg={8}
                    xl={6}
                    style={{minHeight: 600, minWidth: 600}}
                  >
                    {leftColNavTabs.length === 1 ? (
                      leftColNavTabs[0].content
                    ) : (
                      <>
                        <Nav tabs>
                          {leftColNavTabs.map((navTab, navTabIndex) => (
                            <NavItem key={navTabIndex}>
                              <NavLink
                                className={
                                  activeLeftColNavTabIndex === navTabIndex
                                    ? "active"
                                    : undefined
                                }
                                onClick={() =>
                                  setActiveLeftColNavTabIndex(navTabIndex)
                                }
                              >
                                {navTab.title}
                              </NavLink>
                            </NavItem>
                          ))}
                        </Nav>
                        <TabContent
                          activeTab={activeLeftColNavTabIndex.toString()}
                        >
                          {leftColNavTabs.map((navTab, navTabIndex) => (
                            <TabPane
                              key={navTabIndex}
                              tabId={navTabIndex.toString()}
                            >
                              <div className="mt-2">{navTab.content}</div>
                            </TabPane>
                          ))}
                        </TabContent>
                      </>
                    )}
                  </Col>
                ) : null}
                <Col
                  className="d-flex justify-content-center px-0 pt-2"
                  xs={12}
                  sm={12}
                  lg={leftColNavTabs.length > 0 ? 4 : 12}
                  xl={leftColNavTabs.length > 0 ? 6 : 12}
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
                          dangerouslySetInnerHTML={{
                            __html: currentWorkAbstract,
                          }}
                        ></Col>
                      </Row>
                    ) : null}
                  </Container>
                </Col>
              </Row>
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
          </div>
        </div>
      </Hammer>
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
