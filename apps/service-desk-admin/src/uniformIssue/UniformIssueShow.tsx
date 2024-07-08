import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UniformIssueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="reportedBy" source="reportedBy" />
        <TextField label="assignedTo" source="assignedTo" />
        <TextField label="priority" source="priority" />
        <TextField label="description" source="description" />
        <TextField label="uniformId" source="uniformId" />
      </SimpleShowLayout>
    </Show>
  );
};
