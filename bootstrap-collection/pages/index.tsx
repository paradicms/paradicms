import * as React from "react";
import {Collection} from "@paradicms/models";
import {Layout} from "components/Layout";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";

interface StaticProps {
  collection: Collection;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({collection}) => (
  <Layout collection={collection}>
    <div></div>
  </Layout>
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const data = new Data();
  return {
    props: {
      collection: data.collection,
    },
  };
};
