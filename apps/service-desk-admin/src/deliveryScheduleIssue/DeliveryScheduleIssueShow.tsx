import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DeliveryScheduleIssueShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="deliveryId" source="deliveryId" />
        <TextField label="priority" source="priority" />
        <TextField label="description" source="description" />
        <TextField label="reportedBy" source="reportedBy" />
        <TextField label="status" source="status" />
        <TextField label="assignedTo" source="assignedTo" />
      </SimpleShowLayout>
    </Show>
  );
};
