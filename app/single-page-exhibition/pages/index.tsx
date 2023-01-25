import * as React from "react";
import {useMemo} from "react";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import fs from "fs";
import {readConfigurationFile, readModelSetFile} from "@paradicms/next";
import {ModelSet} from "@paradicms/models";
import {defaultSinglePageExhibitionAppConfiguration} from "../lib/defaultSinglePageExhibitionAppConfiguration";
import {readSinglePageExhibitionAppConfiguration} from "../lib/readSinglePageExhibitionAppConfiguration";
import {SinglePageExhibitionAppConfiguration} from "../lib/SinglePageExhibitionAppConfiguration";
import {parseIntoDataset} from "@paradicms/rdf";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: SinglePageExhibitionAppConfiguration;
  readonly modelSetString: string;
  readonly firstWorkUri: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  modelSetString,
  firstWorkUri,
}) => {
  const router = useRouter();

  const modelSet = useMemo(
    () => new ModelSet(parseIntoDataset(modelSetString)),
    [modelSetString]
  );
  const collection = modelSet.collectionByUri(collectionUri);
  const collectionAbstract = collection.abstract;

  if (!collectionAbstract) {
    // Will redirect in the useEffect, so this render will never be seen
    return <div></div>;
  }

  return (
    <div></div>
    // <Layout
    //   collection={collection}
    //   configuration={configuration}
    //   nextWork={{uri: firstWorkUri}}
    // >
    //   <Container fluid>
    //     <Row>
    //       <Col
    //         className="text-wrap"
    //         xs={12}
    //         dangerouslySetInnerHTML={{
    //           __html: collectionAbstract.toString(),
    //         }}
    //       ></Col>
    //     </Row>
    //     {collectionAbstract instanceof Text && collectionAbstract.rights ? (
    //       <Row className="mt-2">
    //         <Col className="text-center" xs={12}>
    //           <RightsParagraph
    //             material="Text"
    //             rights={collectionAbstract.rights}
    //             style={{fontSize: "xx-small"}}
    //           />
    //         </Col>
    //       </Row>
    //     ) : null}
    //   </Container>
    // </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const modelSet = readModelSetFile(readFileSync);
  const collection = modelSet.collections[0];

  return {
    props: {
      configuration:
        readSinglePageExhibitionAppConfiguration(
          readConfigurationFile(readFileSync),
          modelSet.dataset
        ) ?? defaultSinglePageExhibitionAppConfiguration,
      modelSetString: modelSet.stringify(),
      collectionUri: collection.uri,
      firstWorkUri: collection.works[0].uri,
    },
  };
};
