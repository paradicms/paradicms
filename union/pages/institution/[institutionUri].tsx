import * as React from "react";
import {Layout} from "components/Layout";
import {List, ListItem} from "@material-ui/core";
import {Hrefs} from "lib/Hrefs";
import { Collection, Institution } from "@paradicms/models";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps} from "next";
import { Data } from "lib/Data";

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
              {...Hrefs.institution(institution.uri).collection(collection.uri).home}
            >
              {collection.title}
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
    paths: institutions.map(institution => ({ params: { institutionUri: institution.uri } }))
  }
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const institutionUri = params!.institutionUri as string;
  const institution = Data.getInstitutionByUri(institutionUri);
  const collections = Data.getCollectionsByInstitutionUri(institutionUri)
  return {
    props: {collections, institution}
  }
}
