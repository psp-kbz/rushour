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
  export type TaskStatus =
    | "completed"
    | "in-progress"
    | "planned"
    | "pending"
    | "blocked";
  export type TaskComplexity = "Low" | "Medium" | "High";

  //API Response
  export type ApiListResponse<T> = {
    data: T[];
    pagination: {
      total_records: number;
      total_pages?: number;
      current_page?: number;
    };
    kbzRefNo: string;
  };

  export type ApiResponse<T> = {
    data: T;
    kbzRefNo: string;
  };

  export type ErrorDetail = {
    ErrorCode: string;
    ErrorDescription: string;
  };

  export type ApiErrorResponse = {
    KBZRefNo: string;
    Error: {
      Code: string;
      Message: string;
      Details: ErrorDetail[];
    };
  };

  export interface RoleResponse {
    page_info: Permission[];
    service_code?: string;
    module_name: string;
    service_id: string;
    role_id?: string;
    role_code?: string;
  }
  //User
  export interface User {
    adUserID?: string;
    role?: string;
    email?: string;
    loginID: string;
    userName: string;
    branchID?: string;
    branchCode?: string;
    branchName?: string;
    serviceID?: string;
    gpOfBranchID?: string;
  }

  export interface UserResponse {
    adba_users_master_id: string;
    address: string;
    branch_id?: string;
    branch_code?: string;
    branch_name?: string;
    login_id: string;
    mobile_no: string;
    nrc: string;
    email: string;
    position: string;
    role_info: Record<string, string>[];
    user_name: string;
    serviceId: string;
    groupOfBranchId: string;
  }
}
export {};
