import {WorkAgent} from "@paradicms/models";

export type WorkAgentWithWorkKey = WorkAgent & {readonly workKey: string};
