import {
  DateRangeEndpoint,
  DateRangeFacet,
  DateRangeFilter,
  imputeDateRangeEndpoint,
} from "@paradicms/api";
import {
  deleteUndefined,
  parseAnyDate,
  requireNonNull,
} from "@paradicms/utilities";
import dayjs from "dayjs";
import log from "loglevel";
import React, {useState} from "react";
import {Form, FormFeedback, Input, Label} from "reactstrap";
import invariant from "ts-invariant";

type DateRangeEndpointType = "end" | "start";

const dateRangeEndpointToString = (dateRangeEndpoint: DateRangeEndpoint) => {
  let dayjs_ = dayjs();
  // https://day.js.org/docs/en/display/format
  const dateFormat: string[] = [];
  if (dateRangeEndpoint.month != null) {
    dateFormat.push("MM");
    dayjs_ = dayjs_.month(dateRangeEndpoint.month - 1);

    if (dateRangeEndpoint.day != null) {
      dateFormat.push("D");
      dayjs_ = dayjs_.date(dateRangeEndpoint.day);
    }
  }
  dateFormat.push("YYYY");
  dayjs_ = dayjs_.year(dateRangeEndpoint.year);
  return dayjs_.format(dateFormat.join("/"));
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
  const [endInputValid, setEndInputValid] = useState<boolean>(true);
  const [endInputValue, setEndInputValue] = useState<string>(
    filter.end ? dateRangeEndpointToString(filter.end) : ""
  );
  const [formFeedback, setFormFeedback] = useState<string | null>(null);
  const [startInputValid, setStartInputValid] = useState<boolean>(true);
  const [startInputValue, setStartInputValue] = useState<string>(
    filter.start ? dateRangeEndpointToString(filter.start) : ""
  );

  const onChangeInput = (
    dateRangeEndpointType: DateRangeEndpointType,
    inputValue: string
  ) => {
    let newFilter: DateRangeFilterT;

    if (dateRangeEndpointType === "end") {
      setEndInputValue(inputValue);
    } else {
      setStartInputValue(inputValue);
    }

    if (inputValue.length > 0) {
      const parsedInputValue = parseAnyDate(inputValue);
      if (parsedInputValue === null) {
        log.warn("invalid date input:", inputValue);
        if (dateRangeEndpointType === "end") {
          setEndInputValid(false);
          setFormFeedback("Invalid end date: " + inputValue);
        } else {
          setStartInputValid(false);
          setFormFeedback("Invalid start date: " + inputValue);
        }
        return;
      }

      const inputDateRangeEndpoint: DateRangeEndpoint = deleteUndefined({
        day: parsedInputValue.day ?? undefined,
        month: parsedInputValue.month ?? undefined,
        year: parsedInputValue.year,
      });
      log.info(
        "date input as date range endpoint:",
        JSON.stringify(inputDateRangeEndpoint)
      );

      if (dateRangeEndpointType === "end") {
        newFilter = {
          ...filter,
          end: inputDateRangeEndpoint,
        };
      } else {
        newFilter = {
          ...filter,
          start: inputDateRangeEndpoint,
        };
      }
    } else {
      newFilter = {...filter};
      if (dateRangeEndpointType === "end") {
        // @ts-ignore
        delete newFilter.end;
      } else {
        // @ts-ignore
        delete newFilter.start;
      }
    }
    log.info("new filter:", JSON.stringify(newFilter));

    const facetImputedEndDate = requireNonNull(
      imputeDateRangeEndpoint(facet.end, {
        ceil: true,
      })
    );
    const facetImputedStartDate = requireNonNull(
      imputeDateRangeEndpoint(facet.start)
    );
    invariant(facetImputedStartDate.getTime() <= facetImputedEndDate.getTime());

    const newFilterImputedEndDate: Date | null = newFilter.end
      ? imputeDateRangeEndpoint(newFilter.end, {ceil: true})
      : facetImputedEndDate;
    if (newFilterImputedEndDate === null) {
      setEndInputValid(false);
      setFormFeedback("Unable to impute end date");
      return;
    }
    log.info("new filter imputed end date:", newFilterImputedEndDate);

    const newFilterImputedStartDate: Date | null = newFilter.start
      ? imputeDateRangeEndpoint(newFilter.start)
      : facetImputedStartDate;
    if (newFilterImputedStartDate === null) {
      setStartInputValid(false);
      setFormFeedback("Unable to impute start date");
      return;
    }
    log.info("new filter imputed start date:", newFilterImputedStartDate);

    // Allow the filter endpoints to go beyond the facets'

    if (
      newFilterImputedStartDate.getTime() <= newFilterImputedEndDate.getTime()
    ) {
      setEndInputValid(true);
      setFormFeedback(null);
      setStartInputValid(true);
      onChange(newFilter);
    } else {
      setEndInputValid(false);
      setFormFeedback("Start date is later than end date");
      setStartInputValid(false);
    }
  };

  // console.info("Start input valid:", startInputValid);
  // console.info("End input valid:", endInputValid);

  return (
    <Form>
      <div className="form-group mb-0">
        <Label>{filterLabel}</Label>
        <Input
          invalid={startInputValid ? undefined : true}
          placeholder={`Start (earliest: ${dateRangeEndpointToString(
            facet.start
          )})`}
          onChange={e => onChangeInput("start", e.target.value)}
          value={startInputValue}
        />
        <Input
          className="mt-2"
          invalid={endInputValid ? undefined : true}
          placeholder={`End (latest: ${dateRangeEndpointToString(facet.end)})`}
          onChange={e => onChangeInput("end", e.target.value)}
          value={endInputValue}
        />
        {formFeedback ? <FormFeedback>{formFeedback}</FormFeedback> : null}
      </div>
    </Form>
  );
};
