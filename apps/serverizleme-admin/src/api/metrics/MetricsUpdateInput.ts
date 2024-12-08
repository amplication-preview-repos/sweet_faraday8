import { ServerWhereUniqueInput } from "../server/ServerWhereUniqueInput";

export type MetricsUpdateInput = {
  cpuPercentage?: number | null;
  cpuUsage?: number | null;
  dateTime?: Date | null;
  numberOfUsers?: number | null;
  outboundGb?: number | null;
  ramPercentage?: number | null;
  server?: ServerWhereUniqueInput | null;
  usedRam?: number | null;
};
