import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SERVER_TITLE_FIELD } from "./ServerTitle";

export const ServerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Metrics"
          target="serverId"
          label="MetricsItems"
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
            <ReferenceField
              label="Server"
              source="server.id"
              reference="Server"
            >
              <TextField source={SERVER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="usedRam" source="usedRam" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
