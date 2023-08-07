import {useWorksQueryParam} from "./useWorksQueryParam";
import {
  AgentsSort,
  AgentsSortProperty,
  defaultEventsSort,
  defaultWorkAgentsSort,
  defaultWorksSort,
  EventsSort,
  EventsSortProperty,
  WorksFilter,
  WorksQuery,
  WorksSort,
  WorksSortProperty,
} from "@paradicms/api";
import {usePageQueryParam} from "./usePageQueryParam";
import {useSortQueryParams} from "./useSortQueryParams";

export const useWorkSearchQueryParams = (defaultWorksQuery: {
  filters: readonly WorksFilter[];
}): {
  onChangeFilters: (filters: readonly WorksFilter[]) => void;
  onSearch: (text: string) => void;
  setWorksQuery: (worksQuery: WorksQuery) => void;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorkAgentsSort: (sort: AgentsSort | undefined) => void;
  setWorkEventsPage: (page: number | undefined) => void;
  setWorkEventsSort: (sort: EventsSort | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  setWorksSort: (sort: WorksSort | undefined) => void;
  workAgentsPage: number;
  workAgentsSort: AgentsSort;
  workEventsPage: number;
  workEventsSort: EventsSort;
  worksQuery: WorksQuery;
  worksPage: number;
  worksSort: WorksSort;
} => {
  const [workAgentsPage, setWorkAgentsPage] = usePageQueryParam(
    "workAgentsPage"
  );
  const [workAgentsSort, setWorkAgentsSort] = useSortQueryParams<
    AgentsSortProperty
  >(defaultWorkAgentsSort, "workAgentsSort");

  const [workEventsPage, setWorkEventsPage] = usePageQueryParam(
    "workEventsPage"
  );
  const [workEventsSort, setWorkEventsSort] = useSortQueryParams<
    EventsSortProperty
  >(defaultEventsSort, "workEventsSort");

  const [worksPage, setWorksPage] = usePageQueryParam("worksPage");
  const [worksQuery, setWorksQuery] = useWorksQueryParam(
    defaultWorksQuery,
    "query"
  );
  const [worksSort, setWorksSort] = useSortQueryParams<WorksSortProperty>(
    defaultWorksSort,
    "worksSort"
  );

  return {
    onChangeFilters: filters => {
      setWorkAgentsPage(undefined);
      setWorkAgentsSort(undefined);
      setWorkEventsPage(undefined);
      setWorkEventsSort(undefined);
      setWorksPage(undefined);
      setWorksQuery({...worksQuery, filters});
      setWorksSort(undefined);
    },
    onSearch: text => {
      setWorkAgentsPage(undefined);
      setWorkAgentsSort(undefined);
      setWorkEventsPage(undefined);
      setWorkEventsSort(undefined);
      setWorksPage(undefined);
      setWorksQuery({filters: [], text});
      setWorksSort(undefined);
    },
    setWorkAgentsPage,
    setWorkAgentsSort,
    setWorkEventsPage,
    setWorkEventsSort,
    setWorksQuery,
    setWorksPage,
    setWorksSort,
    workAgentsPage,
    workAgentsSort,
    workEventsPage,
    workEventsSort,
    worksQuery,
    worksPage,
    worksSort,
  };
};
