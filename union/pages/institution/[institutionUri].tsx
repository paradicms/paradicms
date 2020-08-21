import * as React from "react";
import {Layout} from "components/Layout";
import {List, ListItem} from "@material-ui/core";
import {Hrefs} from "lib/Hrefs";
import {Collection, Institution} from "@paradicms/models";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps} from "next";
import {Data} from "lib/Data";
import sanitize from "sanitize-filename";

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
  const institutions = Data.getInstitutions();
  return {
    fallback: false,
    paths: institutions.map(institution => ({
      params: {institutionUri: sanitize(institution.uri)},
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const institution = Data.getInstitutionBySanitizedUri(
    params!.institutionUri as string
  );
  const collections = Data.getCollectionsByInstitutionUri(institution.uri);
  return {
    props: {collections, institution},
  };
};
