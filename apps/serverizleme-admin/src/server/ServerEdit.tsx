import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MetricsTitle } from "../metrics/MetricsTitle";

export const ServerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
