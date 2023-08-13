import {NextApiRequest, NextApiResponse} from "next";
import {getRestApiServer} from "../../lib/getRestApiServer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  (await getRestApiServer()).handleGetWorks(req, res);
}
