import { MetricsUpdateManyWithoutServersInput } from "./MetricsUpdateManyWithoutServersInput";

export type ServerUpdateInput = {
  logFilePath?: string | null;
  metricsItems?: MetricsUpdateManyWithoutServersInput;
  name?: string | null;
  serverUrl?: string | null;
};
