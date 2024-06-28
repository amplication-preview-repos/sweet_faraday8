import { Metrics } from "../metrics/Metrics";

export type Server = {
  createdAt: Date;
  id: string;
  metricsItems?: Array<Metrics>;
  name: string | null;
  updatedAt: Date;
};
