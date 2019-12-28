/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ObjectSummaryFragment
// ====================================================

export interface ObjectSummaryFragment_thumbnail {
  __typename: "Image";
  url: string;
}

export interface ObjectSummaryFragment {
  __typename: "Object";
  description: string | null;
  title: string;
  thumbnail: ObjectSummaryFragment_thumbnail | null;
  uri: string;
}
