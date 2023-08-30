import {
  DateRangeEndpoint,
  DateRangeFacet,
  DateRangeFilter,
} from "@paradicms/api";
import React, {useCallback} from "react";
import {Form, Input, InputGroup, InputGroupText} from "reactstrap";

type DateRangeEndpointType = "end" | "start";

const isDateRangeEndpointYearOnly = (dateRangeEndpoint: DateRangeEndpoint) =>
  dateRangeEndpoint.month == null && dateRangeEndpoint.day == null;

type YearRangeFilter = {end: number | null; start: number | null};

const YearRangePicker: React.FunctionComponent<{
  facet: {end: number; start: number};
  filter: YearRangeFilter;
  filterLabel: string;
  onChange: (newFilter: YearRangeFilter) => void;
}> = ({facet, filter, filterLabel, onChange}) => {
  const onChangeInput = useCallback(
    (dateRangeEndpointType: DateRangeEndpointType, inputValue: string) => {
      let intInputValue: number | null;
      if (inputValue.length === 0) {
        intInputValue = null;
      } else {
        intInputValue = parseInt(inputValue);
      }

      if (dateRangeEndpointType === "end") {
        onChange({end: intInputValue, start: filter.start});
      } else {
        onChange({end: filter.end, start: intInputValue});
      }
    },
    [filter]
  );

  return (
    <Form>
      <InputGroup>
        <InputGroupText>{filterLabel}</InputGroupText>
        <Input
          placeholder={`Start year (earliest: ${facet.start})`}
          min={facet.start}
          onChange={e => onChangeInput("start", e.target.value)}
          value={filter.end ?? undefined}
        />
        <Input
          placeholder={`End year (latest: ${facet.end})`}
          max={facet.end}
          onChange={e => onChangeInput("end", e.target.value)}
          type="number"
          value={filter.start ?? undefined}
        />
      </InputGroup>
      {/* <FormFeedback>{formFeedback}</FormFeedback> */}
    </Form>
  );
};

export const DateRangeFilterControl = <
  DateRangeFilterT extends DateRangeFilter
>(props: {
  facet: DateRangeFacet;
  filter: DateRangeFilterT;
  filterLabel: string;
  onChange: (newFilter: DateRangeFilterT) => void;
}) => {
  const {facet, filter, filterLabel, onChange} = props;

  if (
    isDateRangeEndpointYearOnly(facet.end) &&
    isDateRangeEndpointYearOnly(facet.start)
  ) {
    return (
      <YearRangePicker
        facet={{end: facet.end.year, start: facet.start.year}}
        filter={{
          end: filter.end?.year ?? null,
          start: filter.start?.year ?? null,
        }}
        filterLabel={filterLabel}
        onChange={newFilter =>
          onChange({
            ...filter,
            end:
              newFilter.end !== null
                ? {
                    year: newFilter.end,
                  }
                : undefined,
            start:
              newFilter.start !== null
                ? {
                    year: newFilter.start,
                  }
                : undefined,
          })
        }
      />
    );
  } else {
    return <h3>Not implemented: date time range picker</h3>;
  }
};
