import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MetricsListRelationFilter } from "../metrics/MetricsListRelationFilter";

export type ServerWhereInput = {
  id?: StringFilter;
  logFilePath?: StringNullableFilter;
  metricsItems?: MetricsListRelationFilter;
  name?: StringNullableFilter;
  serverUrl?: StringNullableFilter;
};
