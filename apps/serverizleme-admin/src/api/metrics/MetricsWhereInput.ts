import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ServerWhereUniqueInput } from "../server/ServerWhereUniqueInput";

export type MetricsWhereInput = {
  cpuPercentage?: FloatNullableFilter;
  cpuUsage?: FloatNullableFilter;
  dateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  numberOfUsers?: IntNullableFilter;
  outboundGb?: FloatNullableFilter;
  ramPercentage?: FloatNullableFilter;
  server?: ServerWhereUniqueInput;
  usedRam?: FloatNullableFilter;
};
