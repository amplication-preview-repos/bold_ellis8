import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OtherIssueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OtherIssues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="status" source="status" />
        <TextField label="reportedBy" source="reportedBy" />
        <TextField label="assignedTo" source="assignedTo" />
        <TextField label="issueId" source="issueId" />
        <TextField label="priority" source="priority" />
      </Datagrid>
    </List>
  );
};
