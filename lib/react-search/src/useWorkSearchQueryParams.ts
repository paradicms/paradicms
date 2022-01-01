import {useWorkQueryParam} from "./useWorkQueryParam";
import {AppConfiguration} from "@paradicms/configuration";
import {WorkQuery} from "@paradicms/services";
import {usePageQueryParam} from "./usePageQueryParam";
import {Filter} from "@paradicms/filters";

export const useWorkSearchQueryParams = (
  configuration: AppConfiguration
): {
  onChangeFilters: (filters: readonly Filter[]) => void;
  onSearch: (text: string) => void;
  setWorkQuery: (workQuery: WorkQuery) => void;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  workAgentsPage: number;
  workQuery: WorkQuery;
  worksPage: number;
} => {
  const [worksPage, setWorksPage] = usePageQueryParam("worksPage");
  const [workAgentsPage, setWorkAgentsPage] = usePageQueryParam(
    "workAgentsPage"
  );

  const [workQuery, setWorkQuery] = useWorkQueryParam(
    {
      filters: configuration.search?.filters ?? [],
    },
    "query"
  );

  return {
    onChangeFilters: filters => {
      setWorkAgentsPage(undefined);
      setWorksPage(undefined);
      setWorkQuery({...workQuery, filters});
    },
    onSearch: text => {
      setWorkAgentsPage(undefined);
      setWorksPage(undefined);
      setWorkQuery({...workQuery, text});
    },
    setWorkAgentsPage,
    setWorkQuery,
    setWorksPage,
    workAgentsPage,
    workQuery,
    worksPage,
  };
};
