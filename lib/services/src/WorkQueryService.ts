import {WorkQuery} from "./WorkQuery";
import {GetWorksResult} from "./GetWorksResult";
import {GetWorksOptions} from "./GetWorksOptions";

export interface WorkQueryService {
  getWorks(options: GetWorksOptions, query: WorkQuery): Promise<GetWorksResult>;
}
