import { Badge, Button, Flex, Group, Stack, Title } from "@mantine/core";
import { DataTable } from "../../../components/data-table/DataTable";
import { MRT_ColumnDef } from "mantine-react-table";
import { DateCell } from "../../../components/data-table/CustomCell";
import { useTasks } from "../Task/hooks";
import { format } from "date-fns";
import { getStatusColor } from "../../../components/common/StatusSection";
import { Link } from "react-router-dom";
import { DateRangeFilter } from "@components/inputs/DateRangeFilter";

const columns: MRT_ColumnDef<Task>[] = [
  {
    accessorKey: "status",
    header: "Status",
    id: "status",
    Cell: ({ row }) => {
      return (
        <Badge color={getStatusColor(row.original.status)}>
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    id: "createdAt",

    Cell: ({ cell }) => DateCell(cell.getValue<string>()),
  },
  {
    accessorKey: "fromTime",
    header: "Start Time",
    id: "fromTime",
    Cell: ({ row }) => {
      const value = row.original.fromTime;
      return (
        <span className="line-clamp-1">
          {value ? format(value, "hh:mm (a)") : "-"}
        </span>
      );
    },
  },

  {
    accessorKey: "toTime",
    header: "End Time",
    id: "toTime",
    Cell: ({ row }) => {
      const value = row.original.toTime;
      return (
        <span className="line-clamp-1">
          {value ? format(value, "hh:mm (a)") : "-"}
        </span>
      );
    },
  },

  {
    accessorKey: "taskName",
    header: "Task",
    id: "taskName",
  },
  {
    accessorKey: "subTaskName",
    header: "SubTask",
    id: "subTaskName",
  },

  {
    accessorKey: "complexity",
    header: "Complexity",
    id: "complexity",
  },
];

export function HistoryPage() {
  const { data, isLoading } = useTasks();
  return (
    <Stack p="md">
      <Flex
        justify={{ base: "flex-start", md: "space-between" }}
        align={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap="md"
      >
        <Title order={2}>Task List</Title>
        <Group>
          <DateRangeFilter />
        </Group>
      </Flex>
      <DataTable
        columns={columns}
        isLoading={isLoading}
        data={data ?? []}
        total={1}
        renderRowActions={(row) => {
          return (
            <Button
              variant="blue"
              size="xs"
              color="info.5"
              component={Link}
              to={`/d/history/${row.original.id}`}
            >
              View Detail
            </Button>
          );
        }}
      />
    </Stack>
  );
}
