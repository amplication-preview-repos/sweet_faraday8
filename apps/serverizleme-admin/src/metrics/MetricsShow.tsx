import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SERVER_TITLE_FIELD } from "../server/ServerTitle";

export const MetricsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
