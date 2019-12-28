/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchResultsQuery
// ====================================================

export interface SearchResultsQuery_matchingObjects_collection_rights {
  __typename: "Rights";
  text: string;
}

export interface SearchResultsQuery_matchingObjects_collection {
  __typename: "Collection";
  name: string;
  rights: SearchResultsQuery_matchingObjects_collection_rights | null;
  uri: string;
}

export interface SearchResultsQuery_matchingObjects_institution_rights {
  __typename: "Rights";
  text: string;
}

export interface SearchResultsQuery_matchingObjects_institution {
  __typename: "Institution";
  name: string;
  rights: SearchResultsQuery_matchingObjects_institution_rights | null;
  uri: string;
}

export interface SearchResultsQuery_matchingObjects_object_thumbnail {
  __typename: "Image";
  url: string;
}

export interface SearchResultsQuery_matchingObjects_object_rights {
  __typename: "Rights";
  text: string;
}

export interface SearchResultsQuery_matchingObjects_object {
  __typename: "Object";
  description: string | null;
  title: string;
  thumbnail: SearchResultsQuery_matchingObjects_object_thumbnail | null;
  uri: string;
  rights: SearchResultsQuery_matchingObjects_object_rights | null;
}

export interface SearchResultsQuery_matchingObjects {
  __typename: "ObjectSearchResult";
  collection: SearchResultsQuery_matchingObjects_collection;
  institution: SearchResultsQuery_matchingObjects_institution;
  object: SearchResultsQuery_matchingObjects_object;
}

export interface SearchResultsQuery {
  matchingObjects: SearchResultsQuery_matchingObjects[];
  matchingObjectsCount: number;
}

export interface SearchResultsQueryVariables {
  limit: number;
  offset: number;
  text: string;
}
