import * as z from "zod";

export const loginSchema = z.object({
  loginId: z.string().length(6, { message: "AD Login Id must be 6 digits." }),
  password: z.string().min(1, { message: "Please enter password." }),
});

export const taskSchema = z.object({
  taskSchema: z.string().min(1, { message: "Please Select Task" }),
});
