/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import {GatsbyNode} from "gatsby";
import {createSchemaCustomization} from "./createSchemaCustomization";
import {createPages} from "./createPages";

const gatsbyNode: GatsbyNode = {
  createPages,
  createSchemaCustomization,
};

export default gatsbyNode;
