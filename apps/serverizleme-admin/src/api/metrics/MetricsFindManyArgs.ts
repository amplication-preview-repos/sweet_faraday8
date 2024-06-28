import { MetricsWhereInput } from "./MetricsWhereInput";
import { MetricsOrderByInput } from "./MetricsOrderByInput";

export type MetricsFindManyArgs = {
  where?: MetricsWhereInput;
  orderBy?: Array<MetricsOrderByInput>;
  skip?: number;
  take?: number;
};
