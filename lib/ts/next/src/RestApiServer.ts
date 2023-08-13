import {getStaticApi} from "./getStaticApi";
import {
  Api,
  GetModelsResult,
  GetWorkAgentsOptions,
  GetWorkEventsOptions,
  GetWorkLocationsOptions,
  GetWorksOptions,
} from "@paradicms/api";
import {NextApiRequest, NextApiResponse} from "next";
import {ValidationError} from "runtypes";

interface JsonApiError {
  readonly code: string;
  readonly detail: string | null;
  readonly status: string;
  readonly title: string;
}

/**
 * Adapter between Next.js API routes and the Paradicms API.
 */
export class RestApiServer {
  private constructor(private readonly api: Api) {}

  static async create(): Promise<RestApiServer> {
    return new RestApiServer(await getStaticApi());
  }

  async getWorkAgents(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    let options: GetWorkAgentsOptions | undefined;
    try {
      options = req.body ? GetWorkAgentsOptions.check(req.body) : undefined;
    } catch (e) {
      this.sendValidationError(res, e as ValidationError);
      return;
    }

    await this.sendGetModelsResult(res, await this.api.getWorkAgents(options));
  }

  async getWorkEvents(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    let options: GetWorkEventsOptions | undefined;
    try {
      options = req.body ? GetWorkEventsOptions.check(req.body) : undefined;
    } catch (e) {
      this.sendValidationError(res, e as ValidationError);
      return;
    }

    await this.sendGetModelsResult(res, await this.api.getWorkEvents(options));
  }

  async getWorkLocations(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    let options: GetWorkLocationsOptions | undefined;
    try {
      options = req.body ? GetWorkLocationsOptions.check(req.body) : undefined;
    } catch (e) {
      this.sendValidationError(res, e as ValidationError);
      return;
    }

    await res.status(200).json(await this.api.getWorkLocations(options));
  }

  async getWorks(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    let options: GetWorksOptions | undefined;
    try {
      options = req.body ? GetWorksOptions.check(req.body) : undefined;
    } catch (e) {
      this.sendValidationError(res, e as ValidationError);
      return;
    }

    await this.sendGetModelsResult(res, await this.api.getWorks(options));
  }

  // private sendGetModelKeysResult(
  //   res: NextApiResponse,
  //   getModelKeysResult: GetModelKeysResult
  // ): void {
  //   res.status(200).json(getModelKeysResult);
  // }

  private async sendGetModelsResult(
    res: NextApiResponse,
    getModelsResult: GetModelsResult
  ): Promise<void> {
    const {modelSet, ...otherProps} = getModelsResult;
    res.status(200).json({
      modelSet: await modelSet.toJsonLd(),
      ...otherProps,
    });
  }

  private sendValidationError(
    res: NextApiResponse,
    validationError: ValidationError
  ) {
    const jsonApiError: JsonApiError = {
      code: validationError.code,
      detail: validationError.details?.toString() ?? null,
      status: "400",
      title: validationError.message,
    };

    res.status(400).json({errors: [jsonApiError]});
  }
}
