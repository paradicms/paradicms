import {useWorksQueryParam} from "./useWorksQueryParam";
import {
  AgentsSort,
  defaultAgentsSort,
  defaultEventsSort,
  defaultWorksSort,
  EventsSort,
  WorksFilter,
  WorksQuery,
  WorksSort,
} from "@paradicms/api";
import {usePageQueryParam} from "./usePageQueryParam";
import {useSortQueryParams} from "./useSortQueryParams";

export const useWorkSearchQueryParams = (
  defaultWorksQuery: WorksQuery
): {
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
  const [workAgentsSort, setWorkAgentsSort] = useSortQueryParams<AgentsSort>(
    defaultAgentsSort,
    "workAgentsSort"
  );

  const [workEventsPage, setWorkEventsPage] = usePageQueryParam(
    "workEventsPage"
  );
  const [workEventsSort, setWorkEventsSort] = useSortQueryParams<EventsSort>(
    defaultEventsSort,
    "workEventsSort"
  );

  const [worksPage, setWorksPage] = usePageQueryParam("worksPage");
  const [worksQuery, setWorksQuery] = useWorksQueryParam(
    defaultWorksQuery,
    "query"
  );
  const [worksSort, setWorksSort] = useSortQueryParams<WorksSort>(
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
      setWorksQuery({text});
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
