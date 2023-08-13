import {NextApiRequest, NextApiResponse} from "next";
import {getRestApiServer} from "../../lib/getRestApiServer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await (await getRestApiServer()).getWorkEvents(req, res);
}
