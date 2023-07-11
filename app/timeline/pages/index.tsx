import {ModelSetFactory} from "@paradicms/models";
import {readModelSet} from "@paradicms/next";
import fs from "fs";
import {GetStaticProps} from "next";
import * as path from "path";
import * as React from "react";
import {useMemo} from "react";
import {Container} from "reactstrap";
import {Layout} from "../components/Layout";

interface StaticProps {
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({modelSetString}) => {
  const modelSet = useMemo(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
  const configuration = modelSet.appConfiguration;

  return (
    <Layout configuration={configuration}>
      <Container fluid></Container>
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });

  return {
    props: {
      modelSetString: modelSet.toFastRdfString(),
    },
  };
};
