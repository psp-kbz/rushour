import { Button, Flex, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { EditTaskForm, TaskForm } from "./Form";
import { useCreateTask, useEditTask } from "../hooks";

export function CreateTaskModal() {
  const [opened, { open, close }] = useDisclosure();
  const { mutateAsync, isPending } = useCreateTask();

  const onSubmit = (values: Partial<Task>) => {
    console.log("Submitted");
    mutateAsync(values).then(() => close());
  };

  return (
    <>
      <Button size="sm" rightSection={<IconPlus />} onClick={open}>
        Create New Task
      </Button>
      <Modal
        size="lg"
        title="Create Task"
        onClose={close}
        opened={opened}
        id="task-create"
      >
        <TaskForm isLoading={isPending} onSubmit={onSubmit} close={close} />
      </Modal>
    </>
  );
}

type EditTaskModalProps = {
  initialValues: Task | undefined;
};

export function EditTaskModal({ initialValues }: EditTaskModalProps) {
  const [opened, { open, close }] = useDisclosure();

  const { mutateAsync, isPending } = useEditTask();

  const onSubmit = (values: Partial<Task>) => {
    mutateAsync(values).then(() => close());
  };

  return (
    <>
      <Button variant="subtle" color="info.5" onClick={open}>
        <Flex gap="md" align="center" justify="center">
          <Text>Edit</Text>
          <IconEdit />
        </Flex>
      </Button>
      <Modal
        size="lg"
        id="task-edit"
        title="Edit Task"
        onClose={close}
        opened={opened}
      >
        <EditTaskForm
          isLoading={isPending}
          onSubmit={onSubmit}
          close={close}
          values={initialValues}
        />
      </Modal>
    </>
  );
}
