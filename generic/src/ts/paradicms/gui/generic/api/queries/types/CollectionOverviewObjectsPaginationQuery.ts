/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CollectionOverviewObjectsPaginationQuery
// ====================================================

export interface CollectionOverviewObjectsPaginationQuery_collectionByUri_objects_thumbnail {
  __typename: "Image";
  url: string;
}

export interface CollectionOverviewObjectsPaginationQuery_collectionByUri_objects {
  __typename: "Object";
  description: string | null;
  title: string;
  thumbnail: CollectionOverviewObjectsPaginationQuery_collectionByUri_objects_thumbnail | null;
  uri: string;
}

export interface CollectionOverviewObjectsPaginationQuery_collectionByUri {
  __typename: "Collection";
  objects: CollectionOverviewObjectsPaginationQuery_collectionByUri_objects[];
}

export interface CollectionOverviewObjectsPaginationQuery {
  collectionByUri: CollectionOverviewObjectsPaginationQuery_collectionByUri;
}

export interface CollectionOverviewObjectsPaginationQueryVariables {
  collectionUri: string;
  limit: number;
  offset: number;
}
