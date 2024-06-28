import { StringFilter } from "../../util/StringFilter";
import { MetricsListRelationFilter } from "../metrics/MetricsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ServerWhereInput = {
  id?: StringFilter;
  metricsItems?: MetricsListRelationFilter;
  name?: StringNullableFilter;
};
