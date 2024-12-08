import { Server } from "../server/Server";

export type Metrics = {
  cpuPercentage: number | null;
  cpuUsage: number | null;
  createdAt: Date;
  dateTime: Date | null;
  id: string;
  numberOfUsers: number | null;
  outboundGb: number | null;
  ramPercentage: number | null;
  server?: Server | null;
  updatedAt: Date;
  usedRam: number | null;
};
