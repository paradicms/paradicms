import * as React from "react";
import {Layout} from "components/Layout";
import {List, ListItem} from "@material-ui/core";
import {Hrefs} from "lib/Hrefs";
import {Collection, Institution} from "@paradicms/models";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps} from "next";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";

const InstitutionPage: React.FunctionComponent<{
  collections: readonly Collection[];
  institution: Institution;
}> = ({collections, institution}) => (
  <Layout
    breadcrumbs={{institution}}
    documentTitle={`${institution.name} - Collections`}
  >
    <List>
      {collections.map(collection => (
        <ListItem key={collection.uri}>
          <Link
            {...Hrefs.institution(institution.uri).collection(collection.uri)
              .home}
          >
            <a>{collection.title}</a>
          </Link>
        </ListItem>
      ))}
    </List>
  </Layout>
);

export default InstitutionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: Data.institutions.map(institution => ({
      params: {institutionUri: encodeFileName(institution.uri)},
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const institutionUri = decodeFileName(params!.institutionUri as string);
  const institution = Data.institutions.find(
    institution => institution.uri === institutionUri
  )!;
  const collections = Data.collections.filter(
    collection => collection.institutionUri === institutionUri
  );
  return {
    props: {collections, institution},
  };
};
