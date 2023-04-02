import {useWorksQueryParam} from "./useWorksQueryParam";
import {
  Filter,
  WorkAgentsSort,
  WorkEventsSort,
  WorksQuery,
  WorksSort,
} from "@paradicms/services";
import {usePageQueryParam} from "./usePageQueryParam";

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
  workEventsPage: number;
  // workEventsSortProperty: string;
  worksQuery: WorksQuery;
  worksPage: number;
  worksSort: WorksSort;
} => {
  const [workAgentsPage, setWorkAgentsPage] = usePageQueryParam(
    "workAgentsPage"
  );
  const [workEventsPage, setWorkEventsPage] = usePageQueryParam(
    "workEventsPage"
  );
  const [worksPage, setWorksPage] = usePageQueryParam("worksPage");

  const [worksQuery, setWorksQuery] = useWorksQueryParam(
    defaultWorksQuery,
    "query"
  );

  return {
    onChangeFilters: filters => {
      setWorkAgentsPage(undefined);
      setWorkEventsPage(undefined);
      setWorksPage(undefined);
      setWorksQuery({...worksQuery, filters});
    },
    onSearch: text => {
      setWorkAgentsPage(undefined);
      setWorkEventsPage(undefined);
      setWorksPage(undefined);
      setWorksQuery({filters: [], text});
    },
    setWorkAgentsPage,
    setWorkEventsPage,
    setWorksQuery,
    setWorksPage,
    workAgentsPage,
    workEventsPage,
    worksQuery,
    worksPage,
  };
};
