import { Badge, Flex, Group, Stack, Title } from "@mantine/core";
import { DataTable } from "../../../components/data-table/DataTable";
import { MRT_ColumnDef } from "mantine-react-table";
import { DateCell } from "../../../components/data-table/CustomCell";
import { useTasks } from "../Task/hooks";
import { format } from "date-fns";
import { getStatusColor } from "../../../components/common/StatusSection";

const columns: MRT_ColumnDef<Task>[] = [
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
      </Flex>
      <DataTable
        columns={columns}
        isLoading={isLoading}
        data={data ?? []}
        total={2}
        renderRowActions={(row) => {
          if (row.original && row.original.id) {
            return <Group wrap="nowrap"></Group>;
          }
          return null;
        }}
      />
    </Stack>
  );
}
