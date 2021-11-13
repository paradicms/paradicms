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
  Text,
} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  readConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {
  Card,
  CardBody,
  CardFooter,
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
  const collection = dataset.collectionByUri(collectionUri);
  const currentWork = dataset.workByUri(currentWorkUri);
  const institution = collection.institution;

  const currentWorkAbstract: string | Text | null = useMemo(() => {
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

  const currentWorkAbstractRights: Rights | null = useMemo(() => {
    if (
      currentWorkAbstract &&
      currentWorkAbstract instanceof Text &&
      currentWorkAbstract.rights
    ) {
      return currentWorkAbstract.rights;
    } else if (currentWork.rights) {
      return currentWork.rights;
    } else {
      return institution.rights;
    }
  }, [currentWork, currentWorkAbstract, institution]);

  const currentWorkAgentProfiles = useMemo(
    () =>
      getWorkAgentProfiles({
        institution,
        work: currentWork,
      }),
    [currentWork, institution]
  );

  const [
    currentWorkImagesCarouselImage,
    setCurrentWorkImagesCarouselImage,
  ] = useState<Image | null>(null);

  const leftColNavTabs: {content: React.ReactNode; title: string}[] = [];
  if (currentWork.images.length > 0) {
    leftColNavTabs.push({
      title: "Images",
      content: (
        <Card className="border-0">
          <CardBody className="text-center">
            <WorkImagesCarousel
              hideImageRights={true}
              key={leftColNavTabs.length}
              onShowImage={setCurrentWorkImagesCarouselImage}
              work={currentWork}
            />
          </CardBody>
          {currentWorkImagesCarouselImage &&
          currentWorkImagesCarouselImage.rights ? (
            <CardFooter className="text-center">
              <RightsParagraph
                material="Image"
                rights={currentWorkImagesCarouselImage.rights}
                style={RIGHTS_STYLE}
              />
            </CardFooter>
          ) : null}
        </Card>
      ),
    });
  }
  if (currentWorkAgentProfiles.length > 0) {
    leftColNavTabs.push({
      title: "People",
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

  let leftCol: React.ReactNode;
  if (leftColNavTabs.length === 1) {
    leftCol = leftColNavTabs[0].content;
  } else if (leftColNavTabs.length > 1) {
    leftCol = (
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
                onClick={() => setActiveLeftColNavTabIndex(navTabIndex)}
              >
                {navTab.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeLeftColNavTabIndex.toString()}>
          {leftColNavTabs.map((navTab, navTabIndex) => (
            <TabPane key={navTabIndex} tabId={navTabIndex.toString()}>
              <div className="mt-2">{navTab.content}</div>
            </TabPane>
          ))}
        </TabContent>
      </>
    );
  }

  const rightCol = currentWorkAbstract ? (
    <Container fluid>
      <Row>&nbsp;</Row>
      <Row className="mt-4">
        <Col
          className="text-wrap"
          xs={12}
          dangerouslySetInnerHTML={{
            __html: currentWorkAbstract.toString(),
          }}
        ></Col>
      </Row>
    </Container>
  ) : null;

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      currentWork={currentWork}
      nextWork={nextWorkUri ? {uri: nextWorkUri} : undefined}
      previousWork={previousWorkUri ? {uri: previousWorkUri} : undefined}
    >
      <Hammer onSwipeLeft={onGoToPreviousWork} onSwipeRight={onGoToNextWork}>
        <div>
          <div onKeyDown={onKeyDown} style={{outline: "none"}} tabIndex={0}>
            <Container fluid>
              <Row>
                {leftCol ? (
                  <Col
                    xs={12}
                    sm={12}
                    lg={rightCol ? 8 : 12}
                    xl={rightCol ? 6 : 12}
                    style={{minHeight: 600, minWidth: 600}}
                  >
                    {leftCol}
                  </Col>
                ) : null}
                <Col
                  className="d-flex justify-content-center px-0"
                  xs={12}
                  sm={12}
                  lg={leftCol ? 4 : 12}
                  xl={leftCol ? 6 : 12}
                >
                  {rightCol}
                </Col>
              </Row>
              {currentWorkAbstract && currentWorkAbstractRights ? (
                <Row className="mt-2">
                  <Col style={{textAlign: "center"}} xs={12}>
                    <RightsParagraph
                      material="Text"
                      rights={currentWorkAbstractRights}
                      style={RIGHTS_STYLE}
                    />
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

  const currentWorkI = collectionWorks.findIndex(
    work => work.uri === currentWork.uri
  );
  if (currentWorkI === -1) {
    throw new EvalError();
  }
  const nextWorkUri =
    currentWorkI + 1 < collectionWorks.length
      ? collectionWorks[currentWorkI + 1].uri
      : null;
  const previousWorkUri =
    currentWorkI > 0 ? collectionWorks[currentWorkI - 1].uri : null;

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
