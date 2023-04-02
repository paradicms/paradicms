import {useWorksQueryParam} from "./useWorksQueryParam";
import {
  defaultWorkAgentsSort,
  defaultWorkEventsSort,
  defaultWorksSort,
  Filter,
  WorkAgentsSort,
  WorkAgentsSortProperty,
  WorkEventsSort,
  WorkEventsSortProperty,
  WorksQuery,
  WorksSort,
  WorksSortProperty,
} from "@paradicms/services";
import {usePageQueryParam} from "./usePageQueryParam";
import {useSortQueryParam} from "./useSortQueryParam";

export const useWorkSearchQueryParams = (defaultWorksQuery: {
  filters: readonly Filter[];
}): {
  onChangeFilters: (filters: readonly Filter[]) => void;
  onSearch: (text: string) => void;
  setWorksQuery: (worksQuery: WorksQuery) => void;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorkAgentsSort: (sort: WorkAgentsSort | undefined) => void;
  setWorkEventsPage: (page: number | undefined) => void;
  setWorkEventsSort: (sort: WorkEventsSort | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  setWorksSort: (sort: WorksSort | undefined) => void;
  workAgentsPage: number;
  workAgentsSort: WorkAgentsSort;
  workEventsPage: number;
  workEventsSort: WorkEventsSort;
  worksQuery: WorksQuery;
  worksPage: number;
  worksSort: WorksSort;
} => {
  const [workAgentsPage, setWorkAgentsPage] = usePageQueryParam(
    "workAgentsPage"
  );
  const [workAgentsSort, setWorkAgentsSort] = useSortQueryParam<
    WorkAgentsSortProperty
  >(defaultWorkAgentsSort, "workAgentsSort");

  const [workEventsPage, setWorkEventsPage] = usePageQueryParam(
    "workEventsPage"
  );
  const [workEventsSort, setWorkEventsSort] = useSortQueryParam<
    WorkEventsSortProperty
  >(defaultWorkEventsSort, "workEventsSort");

  const [worksPage, setWorksPage] = usePageQueryParam("worksPage");
  const [worksQuery, setWorksQuery] = useWorksQueryParam(
    defaultWorksQuery,
    "query"
  );
  const [worksSort, setWorksSort] = useSortQueryParam<WorksSortProperty>(
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
