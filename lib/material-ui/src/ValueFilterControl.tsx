import * as React from "react";
// import {Checkbox, FormControlLabel, List, ListItem} from "@material-ui/core";
import {ValueFacet, ValueFilter, ValueFilterState} from "@paradicms/models";
import MUIDatatable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions,
} from "mui-datatables";
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

export const ValueFilterControl: React.FunctionComponent<{
  facet: ValueFacet<string>;
  filter: ValueFilter<string>;
  onChange: (newState: ValueFilter<string>) => void;
  title: string;
}> = ({facet, filter, onChange, title}) => {
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
    () => facet.values.concat().sort((left, right) => right.count - left.count),
    [facet]
  );

  const datatableRowsPerPage = 5;

  const state = new ValueFilterState({
    filter,
    valueUniverse: facet.values.map(value => value.value),
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
        const newState = new ValueFilterState({
          filter,
          valueUniverse: facet.values.map(value => value.value),
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
