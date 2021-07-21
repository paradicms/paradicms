import * as React from "react";
// import {Checkbox, FormControlLabel, List, ListItem} from "@material-ui/core";
import {ValueFacetFilter, ValueFacetFilterState, ValueFacetValue} from "@paradicms/models";
import MUIDatatable, {MUIDataTableColumnDef, MUIDataTableOptions} from "mui-datatables";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MUIDataTableToolbar: {
      root: {
        display: "none",
      },
    },
    MUIDataTableToolbarSelect: {
      root: {
        display: "none",
      },
    },
  } as any,
});

export const ValueFacetControls: React.FunctionComponent<{
  currentState: ValueFacetFilter<string> | null; // value id's only
  onChange: (newState: ValueFacetFilter<string> | null) => void;
  title: string;
  valueUniverse: readonly ValueFacetValue<string>[];
}> = ({currentState, onChange, title, valueUniverse}) => {
  const datatableColumns: MUIDataTableColumnDef[] = React.useMemo(
    () => [
      {
        name: "value",
        label: title,
        options: {
          customBodyRender: (value, tableMeta) => {
            const label = tableMeta.rowData[2];
            return label ?? value;
          },
          sort: true,
        },
      },
      {
        name: "count",
        label: "Count",
        options: {
          sort: true,
        },
      },
      {
        name: "label",
        label: "",
        options: {
          display: false,
        },
      },
    ],
    []
  );

  const datatableData = React.useMemo(
    () =>
      valueUniverse.concat().sort((left, right) => right.count - left.count),
    [valueUniverse]
  );

  const datatableRowsPerPage = 5;

  const state = new ValueFacetFilterState<string>({
    filter: currentState,
    valueUniverse: valueUniverse.map(value => value.value),
  });

  const datatableRowsSelected = Array.from(
    Array(datatableData.length).keys()
  ).filter(dataIndex => state.includesValue(datatableData[dataIndex].value));

  const datatableOptions: MUIDataTableOptions = React.useMemo(
    () => ({
      // customToolbarSelect: () => ({}),
      download: "false",
      filter: "false",
      fixedHeader: false,
      onRowSelectionChange: (
        currentRowsSelected,
        allRowsSelected,
        rowsSelected
      ) => {
        const newState = new ValueFacetFilterState<string>({
          filter: null,
          valueUniverse: valueUniverse.map(value => value.value),
        });
        const rowsSelectedSet = new Set<number>(rowsSelected!);
        for (let dataIndex = 0; dataIndex < datatableData.length; dataIndex++) {
          const value = datatableData[dataIndex].value;
          if (rowsSelectedSet.has(dataIndex)) {
            newState.includeValue(value);
          } else {
            newState.excludeValue(value);
          }
        }
        onChange(newState.snapshot);
      },
      onRowsDelete: () => false,
      pagination: datatableData.length > datatableRowsPerPage,
      print: "false",
      responsive: "standard",
      rowsPerPage: datatableRowsPerPage,
      rowsPerPageOptions: [],
      rowsSelected: datatableRowsSelected,
      search: "false",
      setRowProps: (row, dataIndex) => ({
        "data-cy": "facet-value-" + datatableData[dataIndex].value,
      }),
      setTableProps: () => ({
        // padding: "none",
        size: "small",
      }),
      viewColumns: "false",
    }),
    [datatableData]
  );

  return (
    <ThemeProvider theme={theme}>
      <MUIDatatable
        columns={datatableColumns}
        data={datatableData}
        options={datatableOptions}
        title=""
      />
    </ThemeProvider>
  );
};
