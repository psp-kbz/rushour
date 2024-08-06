declare global {
  export type Task = {
    id: string;
    taskName: TaskName;
    subTaskName: SubTaskName;
    status: TaskStatus;
    complexity: TaskComplexity;
    createdAt: Date;
    updatedAt?: Date;
    fromTime?: Date;
    toTime?: Date;
    projectName?: string;
    remark: string;
    projectManagerName?: string;
    businessAnalystName?: string;
    departmentName?: string;
    category?: string;
    staffId: string;
    staffName: string;
  };
  export type TaskName =
    | "Development"
    | "Meeting"
    | "Support"
    | "Deployment"
    | "Testing"
    | "Request Form"
    | "Documentation"
    | "Bug Fixed"
    | "Discussion";
  export type SubTaskName =
    | "API"
    | "New"
    | "Production"
    | "UAT"
    | "VPN Request"
    | "AD Request"
    | "API Documentation"
    | "Change Request"
    | "Handover"
    | "Portal"
    | "Enhancement"
    | "Daily Standup Meeting"
    | "Interview"
    | "Team Discussion";
  export type TaskStatus = "completed" | "in-progress" | "planned" | "pending";
  export type TaskComplexity = "Low" | "Medium" | "High";
}
export {};
