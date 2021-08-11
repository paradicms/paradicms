import * as React from "react";
import {useCallback, useMemo} from "react";
import {
  PrimitiveType,
  ValueFacet,
  ValueFilter,
  ValueFilterState,
} from "@paradicms/models";
import DataTable, {IDataTableColumn} from "react-data-table-component";

type DataTableRow<T extends PrimitiveType> = {
  count: number;
  id: string;
  label: string;
  selected: boolean;
  value?: T;
};

interface ValueFilterControlProps<T extends PrimitiveType> {
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterControl = <T extends PrimitiveType>(
  props: ValueFilterControlProps<T>
) => {
  // @ts-ignore
  const {facet, filter, onChange} = props;

  const state = useMemo(
    () =>
      new ValueFilterState({
        filter,
        valueUniverse: facet.values.map(value => value.value),
      }),
    [facet, filter]
  );

  const dataTableColumns = useMemo((): IDataTableColumn<DataTableRow<T>>[] => {
    return [
      {
        name: "Label",
        selector: row => row.label,
        sortable: true,
      },
      {
        name: "Count",
        selector: row => row.count,
        sortable: true,
      },
    ];
  }, []);

  const dataTableRows = useMemo((): DataTableRow<T>[] => {
    const rows: DataTableRow<T>[] = [];
    // Always include the Unknown row even if the count is 0
    // The onChange logic all first excludes all known and unknown values, then re-includes rows that are checked.
    // If Unknown is not represented in a row it's excluded by that logic. This is confusing to the user.
    rows.push({
      count: facet.unknownCount,
      id: "unknown",
      label: "Unknown",
      selected: state.includeUnknown,
    });
    for (const value of facet.values) {
      rows.push({
        count: value.count,
        id: value.value.toString(),
        label: value.label ?? value.value.toString(),
        selected: state.includesValue(value.value),
        value: value.value,
      });
    }
    return rows;
  }, [facet, state]);

  const onSelectedRowsChange = useCallback(
    (kwds: {
      allSelected: boolean;
      selectedCount: number;
      selectedRows: DataTableRow<T>[];
    }) => {
      const {allSelected, selectedRows} = kwds;
      if (allSelected) {
        state.includeAll();
      } else {
        state.excludeAll();

        for (const selectedRow of selectedRows) {
          if (typeof selectedRow.value !== "undefined") {
            state.includeValue(selectedRow.value);
          } else {
            state.includeUnknown = true;
          }
        }
      }

      onChange(state.snapshot);
    },
    [state]
  );

  return (
    <DataTable
      columns={dataTableColumns}
      data={dataTableRows}
      noContextMenu={true}
      noHeader={true}
      selectableRows={true}
      onSelectedRowsChange={onSelectedRowsChange}
      selectableRowSelected={row => row.selected}
      striped={true}
    />
  );
};
