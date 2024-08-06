import * as z from "zod";
export const taskSchema = z.object({
  taskName: z.string().min(1, { message: "Please Select Task" }),
});
