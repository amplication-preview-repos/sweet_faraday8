import { Metrics } from "../metrics/Metrics";

export type Server = {
  createdAt: Date;
  id: string;
  logFilePath: string | null;
  metricsItems?: Array<Metrics>;
  name: string | null;
  serverUrl: string | null;
  updatedAt: Date;
};
