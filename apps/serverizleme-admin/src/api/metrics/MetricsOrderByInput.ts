import { SortOrder } from "../../util/SortOrder";

export type MetricsOrderByInput = {
  cpuPercentage?: SortOrder;
  cpuUsage?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  numberOfUsers?: SortOrder;
  outboundGb?: SortOrder;
  ramPercentage?: SortOrder;
  serverId?: SortOrder;
  updatedAt?: SortOrder;
  usedRam?: SortOrder;
};
