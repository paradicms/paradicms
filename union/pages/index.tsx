import * as React from "react";
import {GetStaticProps} from "next";
import {Institution} from "@paradicms/models";
import {Hrefs} from "lib/Hrefs";
import {Data} from "lib/Data";
import {List, ListItem, ListItemText} from "@material-ui/core";
import Link from "next/link";
import {Layout} from "components/Layout";

const IndexPage: React.FunctionComponent<{
  institutions: readonly Institution[];
}> = ({institutions}) => (
  <Layout documentTitle="Institutions">
    <List>
      {institutions.map(institution => (
        <ListItem key={institution.uri}>
          <ListItemText>
            <Link {...Hrefs.institution(institution.uri).home}>
              {institution.name}
            </Link>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </Layout>
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {institutions: Data.getInstitutions()},
  };
};
