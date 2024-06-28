import { MetricsCreateNestedManyWithoutServersInput } from "./MetricsCreateNestedManyWithoutServersInput";

export type ServerCreateInput = {
  logFilePath?: string | null;
  metricsItems?: MetricsCreateNestedManyWithoutServersInput;
  name?: string | null;
  serverUrl?: string | null;
};
