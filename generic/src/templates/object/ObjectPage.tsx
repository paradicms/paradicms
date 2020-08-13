import {graphql} from "gatsby";
import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import {Institution} from "~/models/institution/Institution";
import {ObjectPageQuery} from "~/graphql/types";
import {Object} from "~/models/object/Object";
import {RightsTable} from "~/components/rights/RightsTable";

const ObjectPage: React.FunctionComponent<{
  data: ObjectPageQuery;
  pageContext: {
    object: Object;
    institution: Institution;
  };
}> = ({
  data: {
    allImageJson: {nodes: objectImages},
    allPropertyDefinitionJson: {nodes: propertyDefinitions},
  },
  pageContext: {institution, object},
}) => {
  const rights = object.rights ?? institution.rights ?? undefined;

  return (
    <Layout
      breadcrumbs={{institution, object}}
      documentTitle={"Object - " + object.title}
    >
      <Grid container direction="column" spacing={2}>
        {rights ? (
          <Card>
            <CardHeader>Rights</CardHeader>
            <CardContent>
              <RightsTable rights={rights} />
            </CardContent>
          </Card>
        ) : null}
      </Grid>
    </Layout>
  );
};

export default ObjectPage;

export const query = graphql`
  query ObjectPage($objectUri: String!) {
    allImageJson(filter: {objectUri: {eq: $objectUri}}) {
      nodes {
        ...ImageFragment
      }
    }
    allPropertyDefinitionJson {
      nodes {
        ...PropertyDefinitionFragment
      }
    }
  }
`;
