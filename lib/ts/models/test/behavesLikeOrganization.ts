import {Organization} from "../src";
import {behavesLikeAgent} from "./behavesLikeAgent";

export const behavesLikeOrganization = (organization: Organization) => {
  behavesLikeAgent(organization);
};
