import { Flex, Group, Stack, Title } from "@mantine/core";
import { DataTable } from "../../../components/data-table/DataTable";
import { MRT_ColumnDef } from "mantine-react-table";
import { DateCell, TimeCell } from "../../../components/data-table/CustomeCell";
import { TaskWithTaskType, Task } from "../../../schema/task.schema";

const columns: MRT_ColumnDef<TaskWithTaskType>[] = [
  {
    accessorKey: "date",
    header: "Date",
    id: "date",
    size: 100,
    Cell: ({ cell }) => DateCell(cell.getValue<string>()),
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
    id: "startTime",
    Cell: ({ cell }) => TimeCell(cell.getValue<string>()),
  },

  {
    accessorKey: "endTime",
    header: "End Time",
    id: "endTime",
    Cell: ({ cell }) => TimeCell(cell.getValue<string>()),
  },
  {
    accessorKey: "date",
    header: "Date",
    id: "date",
    size: 100,
    Cell: ({ cell }) => DateCell(cell.getValue<string>()),
  },
  {
    accessorKey: "taskType.name",
    header: "Task",
    id: "taskType.name",
  },
];

export function HistoryPage() {
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
        data={[]}
        total={0}
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
