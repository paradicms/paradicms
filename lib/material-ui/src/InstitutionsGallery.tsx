import * as React from "react";
import {Grid} from "@material-ui/core";
import {InstitutionCard} from "./InstitutionCard";
import {Institution} from "@paradicms/models";

export const InstitutionsGallery: React.FunctionComponent<{
  institutions: readonly Institution[];
  renderInstitutionLink: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({institutions, renderInstitutionLink}) => (
  <Grid container direction="column" spacing={4}>
    <Grid item>
      <Grid container spacing={8}>
        {institutions.map(institution => (
          <Grid item key={institution.uri}>
            <InstitutionCard
              institution={institution}
              renderInstitutionLink={renderInstitutionLink}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);
