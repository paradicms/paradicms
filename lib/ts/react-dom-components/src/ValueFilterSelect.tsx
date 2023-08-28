import {
  JsonPrimitiveType,
  ValueFacet,
  ValueFacetValueThumbnail,
  ValueFilter,
  ValueFilterState,
} from "@paradicms/api";
import * as React from "react";
import {useMemo} from "react";
import Select from "react-select";
import {valueThumbnailSelector} from "./valueThumbnailSelector";

interface KnownValueFilterSelectOption {
  count: number;
  type: "Known";
}

interface UnknownValueFilterSelectOption {
  count: number;
  type: "Unknown";
}

interface ValueValueFilterSelectOption<ValueT extends JsonPrimitiveType> {
  count: number;
  label: string;
  thumbnail: ValueFacetValueThumbnail | null;
  type: "Value";
  value: ValueT;
}

type ValueFilterSelectOption<ValueT extends JsonPrimitiveType> =
  | KnownValueFilterSelectOption
  | UnknownValueFilterSelectOption
  | ValueValueFilterSelectOption<ValueT>;

const getOptionValue = <ValueT extends JsonPrimitiveType>(
  option: ValueFilterSelectOption<ValueT>
): string => {
  switch (option.type) {
    case "Known":
    case "Unknown":
      return option.type;
    case "Value":
      return `${option.type}-${option.value}`;
  }
};

export const ValueFilterSelect = <
  ValueT extends JsonPrimitiveType,
  ValueFilterT extends ValueFilter<ValueT>
>(props: {
  facet: ValueFacet<ValueT>;
  filter: ValueFilterT;
  filterLabel: string;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChange: (newFilter: ValueFilterT) => void;
}) => {
  const {facet, filter, filterLabel, getAbsoluteImageSrc, onChange} = props;

  const useThumbnails = facet.values.every(value => !!value.thumbnail);

  const options: ValueFilterSelectOption<ValueT>[] = useMemo(() => {
    const options: ValueFilterSelectOption<ValueT>[] = [];
    if (facet.unknownCount > 0) {
      const knownCount = facet.values.reduce(
        (sum, value) => value.count + sum,
        0
      );
      if (knownCount > 0) {
        options.push({
          count: knownCount,
          type: "Known",
        });
      }
      options.push({count: facet.unknownCount, type: "Unknown"});
    }
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
    <Select<ValueFilterSelectOption<ValueT>, true>
      backspaceRemovesValue={true}
      formatOptionLabel={(option, formatOptionLabelMeta) => {
        switch (formatOptionLabelMeta.context) {
          case "menu":
            switch (option.type) {
              case "Known":
              case "Unknown":
                return `${option.type} (${option.count})`;
              case "Value": {
                const label = `${option.label} (${option.count})`;
                if (!option.thumbnail) {
                  return label;
                }
                return (
                  <figure
                    className="text-center w-100"
                    style={{
                      width: valueThumbnailSelector.targetDimensions.width,
                    }}
                  >
                    <figcaption className="mb-1">{label}</figcaption>
                    <img src={getAbsoluteImageSrc(option.thumbnail.src)} />
                  </figure>
                );
              }
            }
          case "value":
            switch (option.type) {
              case "Known":
              case "Unknown":
                return `${filterLabel}: ${option.type}`;
              case "Value":
                return `${filterLabel}: ${option.label}`;
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
      placeholder={filterLabel}
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
