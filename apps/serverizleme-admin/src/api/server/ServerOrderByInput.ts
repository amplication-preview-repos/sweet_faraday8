import { SortOrder } from "../../util/SortOrder";

export type ServerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  logFilePath?: SortOrder;
  name?: SortOrder;
  serverUrl?: SortOrder;
  updatedAt?: SortOrder;
};
