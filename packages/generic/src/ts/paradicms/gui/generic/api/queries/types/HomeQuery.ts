/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_institutions {
  __typename: "Institution";
  name: string;
  uri: string;
}

export interface HomeQuery {
  institutions: HomeQuery_institutions[];
}
