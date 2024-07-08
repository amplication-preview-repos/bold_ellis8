import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeliveryScheduleIssueList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeliveryScheduleIssues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="deliveryId" source="deliveryId" />
        <TextField label="priority" source="priority" />
        <TextField label="description" source="description" />
        <TextField label="reportedBy" source="reportedBy" />
        <TextField label="status" source="status" />
        <TextField label="assignedTo" source="assignedTo" />
      </Datagrid>
    </List>
  );
};
