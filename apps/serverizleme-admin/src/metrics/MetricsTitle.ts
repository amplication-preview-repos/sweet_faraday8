import { Metrics as TMetrics } from "../api/metrics/Metrics";

export const METRICS_TITLE_FIELD = "id";

export const MetricsTitle = (record: TMetrics): string => {
  return record.id?.toString() || String(record.id);
};
