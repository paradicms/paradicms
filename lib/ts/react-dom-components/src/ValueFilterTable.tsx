import * as React from "react";
import {useCallback, useMemo} from "react";
import DataTable, {TableColumn} from "react-data-table-component";
import {
  JsonPrimitiveType,
  ValueFacet,
  ValueFilter,
  ValueFilterState,
} from "@paradicms/services";

type DataTableRow<T extends JsonPrimitiveType> = {
  count: number;
  id: string;
  label: string;
  selected: boolean;
  value?: T;
};

interface ValueFilterTableProps<T extends JsonPrimitiveType> {
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterTable = <T extends JsonPrimitiveType>(
  props: ValueFilterTableProps<T>
) => {
  // @ts-ignore
  const {facet, filter, onChange} = props;

  const state = useMemo(() => {
    return new ValueFilterState({
      filter,
      valueUniverse: facet.values.map(value => value.value),
    });
  }, [facet, filter]);

  const dataTableColumns = useMemo((): TableColumn<DataTableRow<T>>[] => {
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
      const oldStateSnapshot = state.snapshot;

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

      const newStateSnapshot = state.snapshot;

      if (
        JSON.stringify(oldStateSnapshot) !== JSON.stringify(newStateSnapshot)
      ) {
        onChange(newStateSnapshot);
      }
      // } else {
      //   console.debug("ValueFilterTable: state snapshot has not changed");
      // }
    },
    [state]
  );

  return (
    <DataTable
      columns={dataTableColumns}
      data={dataTableRows}
      dense={true}
      noContextMenu={true}
      noHeader={true}
      selectableRows={true}
      onSelectedRowsChange={onSelectedRowsChange}
      selectableRowSelected={row => row.selected}
      striped={true}
    />
  );
};
