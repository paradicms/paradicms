import * as React from "react";
import {useMemo} from "react";
import {
  JsonPrimitiveType,
  ValueFacet,
  ValueFilter,
  ValueFilterState,
} from "@paradicms/services";
import Select from "react-select";

interface KnownValueFilterSelectOption {
  type: "Known";
}

interface UnknownValueFilterSelectOption {
  type: "Unknown";
}

interface ValueValueFilterSelectOption<T extends JsonPrimitiveType> {
  count: number;
  label: string;
  type: "Value";
  value: T;
}

type ValueFilterSelectOption<T extends JsonPrimitiveType> =
  | KnownValueFilterSelectOption
  | UnknownValueFilterSelectOption
  | ValueValueFilterSelectOption<T>;

const getOptionLabel = <T extends JsonPrimitiveType>(
  option: ValueFilterSelectOption<T>
): string => {
  switch (option.type) {
    case "Known":
    case "Unknown":
      return option.type;
    case "Value":
      return option.label;
  }
};

const getOptionValue = <T extends JsonPrimitiveType>(
  option: ValueFilterSelectOption<T>
): string => {
  switch (option.type) {
    case "Known":
    case "Unknown":
      return option.type;
    case "Value":
      return `${option.type}-${option.value}`;
  }
};

export const ValueFilterSelect = <T extends JsonPrimitiveType>(props: {
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChange: (newFilter: ValueFilter<T>) => void;
}) => {
  const {facet, filter, onChange} = props;

  const options: ValueFilterSelectOption<T>[] = useMemo(
    () =>
      [
        {type: "Known"} as ValueFilterSelectOption<T>,
        {
          type: "Unknown",
        } as ValueFilterSelectOption<T>,
      ].concat(
        facet.values
          .map(
            value =>
              ({
                count: value.count,
                label: value.label ?? value.value.toString(),
                type: "Value",
                value: value.value,
              } as ValueFilterSelectOption<T>)
          )
          .sort((left, right) =>
            getOptionLabel(left).localeCompare(getOptionLabel(right))
          )
      ),
    [facet]
  );

  // @ts-ignore
  const state = useMemo(() => {
    return new ValueFilterState({
      filter,
      valueUniverse: facet.values.map(value => value.value),
    });
  }, [facet, filter]);

  return (
    <Select<ValueFilterSelectOption<T>, true>
      backspaceRemovesValue={true}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      isClearable={true}
      isMulti={true}
      onChange={(options, actionMeta) => {
        console.debug("onChange options:", JSON.stringify(options));
        console.debug("onChange actionMeta:", JSON.stringify(actionMeta));

        const oldStateSnapshot = state.snapshot;

        if (options.length === 0) {
          state.includeAll();
        } else {
          state.excludeAll();
          for (const option of options) {
            switch (option.type) {
              case "Known":
                state.includeKnown();
                break;
              case "Unknown":
                state.includeUnknown();
                break;
              case "Value":
                state.includeValue(option.value);
                break;
            }
          }
        }

        const newStateSnapshot = state.snapshot;
        if (
          JSON.stringify(oldStateSnapshot) !== JSON.stringify(newStateSnapshot)
        ) {
          onChange(newStateSnapshot);
        }
      }}
      options={options}
      placeholder={filter.label}
      value={
        state.includesAll
          ? []
          : options.filter(option => {
              switch (option.type) {
                case "Known":
                  return state.includesKnown;
                case "Unknown":
                  return state.includesUnknown;
                case "Value":
                  return (
                    state.includesValue(option.value) && !state.includesKnown
                  );
              }
            })
      }
    />
  );
};
