import {useWorkQueryParam} from "./useWorkQueryParam";
import {WorkQuery} from "@paradicms/services";
import {usePageQueryParam} from "./usePageQueryParam";
import {Filter} from "@paradicms/filters";

export const useWorkSearchQueryParams = (defaultWorkQuery: {
  filters: readonly Filter[];
}): {
  onChangeFilters: (filters: readonly Filter[]) => void;
  onSearch: (text: string) => void;
  setWorkQuery: (workQuery: WorkQuery) => void;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorkEventsPage: (page: number | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  workAgentsPage: number;
  workEventsPage: number;
  workQuery: WorkQuery;
  worksPage: number;
} => {
  const [workAgentsPage, setWorkAgentsPage] = usePageQueryParam(
    "workAgentsPage"
  );
  const [workEventsPage, setWorkEventsPage] = usePageQueryParam(
    "workEventsPage"
  );
  const [worksPage, setWorksPage] = usePageQueryParam("worksPage");

  const [workQuery, setWorkQuery] = useWorkQueryParam(
    defaultWorkQuery,
    "query"
  );

  return {
    onChangeFilters: filters => {
      setWorkAgentsPage(undefined);
      setWorkEventsPage(undefined);
      setWorksPage(undefined);
      setWorkQuery({...workQuery, filters});
    },
    onSearch: text => {
      setWorkAgentsPage(undefined);
      setWorkEventsPage(undefined);
      setWorksPage(undefined);
      setWorkQuery({filters: [], text});
    },
    setWorkAgentsPage,
    setWorkEventsPage,
    setWorkQuery,
    setWorksPage,
    workAgentsPage,
    workEventsPage,
    workQuery,
    worksPage,
  };
};
