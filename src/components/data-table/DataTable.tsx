import {
  // MRT_GlobalFilterTextInput,
  // MRT_ToolbarAlertBanner,
  // MRT_TableBodyCellValue,
  type MRT_ColumnDef,
  type MRT_RowData,
  useMantineReactTable,
  MRT_TablePagination,
  MRT_PaginationState,
  MRT_Row,
  MantineReactTable,
} from "mantine-react-table";
// import { Table, TableScrollContainer } from '@mantine/core';

import React from "react";
import { useParamsHelper } from "../../hooks/useParamshelper";
import { useEffect, useState } from "react";

export function DataTable<T extends MRT_RowData>({
  columns,
  data = [],
  total = 0,
  isLoading,
  renderRowActions,
}: {
  columns: MRT_ColumnDef<T>[];
  data: T[];
  total: number;
  isLoading?: boolean;
  renderRowActions?: (row: MRT_Row<T>) => React.ReactNode;
}) {
  const { setParams } = useParamsHelper();

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    setParams({ _page: pagination.pageIndex, _per_page: pagination.pageSize });
  }, [pagination, setParams]);

  const table = useMantineReactTable({
    columns,
    data,
    enableRowSelection: false,
    manualFiltering: true,
    // ui
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enableColumnActions: true,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    enableStickyHeader: true,
    initialState: { density: "xs" },
    mantineTableContainerProps: {
      style: {
        maxHeight: "calc(115vh - 18rem)",
        maxWidth: `calc(100vw - 2rem)`,
      },
    },
    mantinePaperProps: { style: { height: "100%" } },
    mantineTableBodyCellProps: { style: { whiteSpace: "nowrap" } },
    // pagination
    manualPagination: true,
    rowCount: total,
    paginationDisplayMode: "pages",
    onPaginationChange: setPagination,
    mantinePaginationProps: {
      rowsPerPageOptions: ["10", "20", "50"],
      withEdges: false,
    },
    // table state
    state: {
      pagination,
      isLoading,
      columnPinning: {
        right: ["mrt-row-actions"],
      },
    },

    // row actions
    positionActionsColumn: "last",
    enableRowActions: !!renderRowActions,
    renderRowActions: ({ row }) => renderRowActions?.(row),
  });

  return (
    <>
      <MantineReactTable table={table} />
      <MRT_TablePagination table={table} />
    </>
  );
}
