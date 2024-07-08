import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GoodsIssueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GoodsIssues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="goodsId" source="goodsId" />
        <TextField label="priority" source="priority" />
        <TextField label="status" source="status" />
        <TextField label="reportedBy" source="reportedBy" />
        <TextField label="assignedTo" source="assignedTo" />
      </Datagrid>
    </List>
  );
};
