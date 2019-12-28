/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: InstitutionOverviewQuery
// ====================================================

export interface InstitutionOverviewQuery_institutionByUri_collections {
  __typename: "Collection";
  description: string | null;
  name: string;
  uri: string;
}

export interface InstitutionOverviewQuery_institutionByUri {
  __typename: "Institution";
  collections: InstitutionOverviewQuery_institutionByUri_collections[];
  name: string;
}

export interface InstitutionOverviewQuery {
  institutionByUri: InstitutionOverviewQuery_institutionByUri;
}

export interface InstitutionOverviewQueryVariables {
  institutionUri: string;
}
