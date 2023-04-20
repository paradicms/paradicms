import {Organization} from "./Organization";
import {OtherAgent} from "./OtherAgent";
import {Person} from "./Person";

export type AgentUnion = Organization | OtherAgent | Person;
