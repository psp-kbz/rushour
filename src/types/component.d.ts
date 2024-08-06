export {};

declare global {
  export type Access = "r" | "w";

  export type Perform = [string, Access];

  export interface Permission {
    adba_pages_master_id?: string;
    class_name?: string;
    module_name: string;
    page_name: string;
    read_access?: string;
    read_write_access?: string;
  }

  type FormProps<T> = {
    isLoading?: boolean;
    onSubmit: (values: Partial<T>) => void;
    close: () => void;
    values?: T;
  };
}
