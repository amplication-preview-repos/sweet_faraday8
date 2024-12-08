import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ServerTitle } from "../server/ServerTitle";

export const MetricsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="cpuPercentage" source="cpuPercentage" />
        <NumberInput label="cpuUsage" source="cpuUsage" />
        <DateTimeInput label="dateTime" source="dateTime" />
        <NumberInput step={1} label="numberOfUsers" source="numberOfUsers" />
        <NumberInput label="outboundGb" source="outboundGb" />
        <NumberInput label="ramPercentage" source="ramPercentage" />
        <ReferenceInput source="server.id" reference="Server" label="Server">
          <SelectInput optionText={ServerTitle} />
        </ReferenceInput>
        <NumberInput label="usedRam" source="usedRam" />
      </SimpleForm>
    </Create>
  );
};
