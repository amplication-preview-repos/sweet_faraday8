import { MetricsCreateNestedManyWithoutServersInput } from "./MetricsCreateNestedManyWithoutServersInput";

export type ServerCreateInput = {
  metricsItems?: MetricsCreateNestedManyWithoutServersInput;
  name?: string | null;
};
