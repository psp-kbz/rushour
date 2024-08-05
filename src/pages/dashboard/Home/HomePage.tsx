import TaskList from "../../../components/TaskList";
import { Task } from "../../../types/Types";

const tasks: Task[] = [
  {
    TaskNumber: "001",
    Date: new Date(),
    FromTime: "09:00",
    ToTime: "10:00",
    Task: "Development",
    SubTask: "Frontend",
    Status: "Completed",
    Project: "Project A",
    Remark: "Implemented login page",
    PM: "John Doe",
    BI: "Jane Smith",
  },

  // Add more tasks here
];
export function HomePage() {
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}
