import * as React from "react";
import {useMemo} from "react";
import {
  JsonPrimitiveType,
  ValueFacet,
  ValueFacetValueThumbnail,
  ValueFilter,
  ValueFilterState,
} from "@paradicms/services";
import Select from "react-select";
import {valueThumbnailSelector} from "./valueThumbnailSelector";

interface KnownValueFilterSelectOption {
  type: "Known";
}

interface UnknownValueFilterSelectOption {
  type: "Unknown";
}

interface ValueValueFilterSelectOption<T extends JsonPrimitiveType> {
  count: number;
  label: string;
  thumbnail: ValueFacetValueThumbnail | null;
  type: "Value";
  value: T;
}

type ValueFilterSelectOption<T extends JsonPrimitiveType> =
  | KnownValueFilterSelectOption
  | UnknownValueFilterSelectOption
  | ValueValueFilterSelectOption<T>;

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
  const {facet, filter, getAbsoluteImageSrc, onChange} = props;

  const useThumbnails = facet.values.every(value => !!value.thumbnail);

  const options: ValueFilterSelectOption<T>[] = useMemo(() => {
    const options: ValueFilterSelectOption<T>[] = [];
    options.push({type: "Known"});
    options.push({type: "Unknown"});
    for (const value of facet.values) {
      options.push({
        count: value.count,
        label: value.label ?? value.value.toString(),
        thumbnail: useThumbnails ? value.thumbnail! : null,
        type: "Value",
        value: value.value,
      });
    }
    return options;
  }, [facet]);

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
      formatOptionLabel={(option, formatOptionLabelMeta) => {
        switch (formatOptionLabelMeta.context) {
          case "menu":
            switch (option.type) {
              case "Known":
              case "Unknown":
                return option.type;
              case "Value": {
                if (!option.thumbnail) {
                  return option.label;
                }
                return (
                  <figure
                    className="text-center w-100"
                    style={{
                      width: valueThumbnailSelector.targetDimensions.width,
                    }}
                  >
                    <figcaption className="mb-1">{option.label}</figcaption>
                    <img src={getAbsoluteImageSrc(option.thumbnail.src)} />
                  </figure>
                );
              }
            }
          case "value":
            switch (option.type) {
              case "Known":
              case "Unknown":
                return `${filter.label}: ${option.type}`;
              case "Value":
                return `${filter.label}: ${option.label}`;
            }
        }
      }}
      getOptionValue={getOptionValue}
      isClearable={true}
      isMulti={true}
      onChange={(options, actionMeta) => {
        console.debug(
          "ValueFilterSelect onChange options:",
          JSON.stringify(options)
        );
        console.debug(
          "ValueFilterSelect onChange actionMeta:",
          JSON.stringify(actionMeta)
        );

        const oldStateSnapshot = state.snapshot;
        console.debug(
          "ValueFilterSelect: old snapshot:",
          JSON.stringify(oldStateSnapshot)
        );

        if (options.length === 0) {
          state.includeAll();
        } else {
          state.excludeAll();
          for (const option of options) {
            switch (option.type) {
              case "Known":
                state.includeKnown();
                console.debug("ValueFilterSelect: include known");
                break;
              case "Unknown":
                state.includeUnknown();
                console.debug("ValueFilterSelect: include unknown");
                break;
              case "Value":
                state.includeValue(option.value);
                console.debug("ValueFilterSelect: include value", option.value);
                break;
            }
          }
        }

        const newStateSnapshot = state.snapshot;
        if (
          JSON.stringify(oldStateSnapshot) !== JSON.stringify(newStateSnapshot)
        ) {
          console.debug(
            "ValueFilterSelect: change to new snapshot:",
            JSON.stringify(newStateSnapshot)
          );
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
