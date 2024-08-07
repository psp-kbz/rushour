import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { TaskForm } from "./Form";

export function CreateTaskModal() {
  const [opened, { open, close }] = useDisclosure();
  // const { mutateAsync, isLoading } = useCreateVehicle();

  // const onSubmit = (values: Partial<Task>) => {
  //   mutateAsync(values).then(() => close());
  // };

  return (
    <>
      <Button size="sm" rightSection={<IconPlus />} onClick={open}>
        Create New Task
      </Button>
      <Modal
        title="Create Task"
        onClose={close}
        opened={opened}
        id="task-create"
      >
        <TaskForm isLoading={false} onSubmit={() => null} close={close} />
      </Modal>
    </>
  );
}
