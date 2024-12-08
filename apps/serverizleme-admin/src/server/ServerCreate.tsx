import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MetricsTitle } from "../metrics/MetricsTitle";

export const ServerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="logFilePath" source="logFilePath" />
        <ReferenceArrayInput
          source="metricsItems"
          reference="Metrics"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MetricsTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="serverUrl" source="serverUrl" />
      </SimpleForm>
    </Create>
  );
};
