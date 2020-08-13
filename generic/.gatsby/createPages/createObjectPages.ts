import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {Institution} from "~/models/Institution";
import {Query} from "~/graphql/types";
import {Object} from "~/models/Object";

export const createObjectPages = async (
  args: CreatePagesArgs & {
    institutions: readonly Institution[];
  }
) => {
  const {graphql, institutions} = args;
  const {createPage} = args.actions;
  await Promise.all(
    institutions.map(async institution => {
      const allObjectJson = await graphql<
        Pick<Query, "allObjectJson">,
        {institutionUri: string}
      >(
        `
          query($institutionUri: String!) {
            allObjectJson(filter: {institutionUri: {eq: $institutionUri}}) {
              nodes {
                collectionUris
                institutionUri
                rights {
                  holder
                  statements
                }
                properties {
                  key
                  value
                }
                title
                uri
              }
            }
          }
        `,
        {institutionUri: institution.uri}
      );

      if (!allObjectJson.data) {
        return Promise.reject(allObjectJson.errors);
      }
      const objects: Object[] = allObjectJson.data.allObjectJson.nodes;

      for (const object of objects) {
        createPage({
          component: path.resolve("src/templates/object/ObjectPage.tsx"),
          context: {
            institution,
            object,
            objectUri: object.uri,
          },
          path: Hrefs.institution(institution).object(object),
        });
      }
    })
  );
};
