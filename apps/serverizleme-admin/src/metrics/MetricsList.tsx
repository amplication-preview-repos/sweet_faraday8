import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SERVER_TITLE_FIELD } from "../server/ServerTitle";

export const MetricsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MetricsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cpuPercentage" source="cpuPercentage" />
        <TextField label="cpuUsage" source="cpuUsage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateTime" source="dateTime" />
        <TextField label="ID" source="id" />
        <TextField label="numberOfUsers" source="numberOfUsers" />
        <TextField label="outboundGb" source="outboundGb" />
        <TextField label="ramPercentage" source="ramPercentage" />
        <ReferenceField label="Server" source="server.id" reference="Server">
          <TextField source={SERVER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="usedRam" source="usedRam" />
      </Datagrid>
    </List>
  );
};
