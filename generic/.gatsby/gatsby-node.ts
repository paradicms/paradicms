/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import {GatsbyNode, SourceNodesArgs} from "gatsby";
import {createSchemaCustomization} from "./createSchemaCustomization";
import {createPages} from "./createPages";

const gatsbyNode: GatsbyNode = {
  createPages,
  createSchemaCustomization,

  sourceNodes: async ({
    actions: {createNode},
    createNodeId,
    createContentDigest,
  }: SourceNodesArgs): Promise<void> => {
    /**
     * Create your nodes here
     */
    return;
  },
};

export default gatsbyNode;
