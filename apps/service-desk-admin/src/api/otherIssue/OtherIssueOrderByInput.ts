import { SortOrder } from "../../util/SortOrder";

export type OtherIssueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  reportedBy?: SortOrder;
  assignedTo?: SortOrder;
  issueId?: SortOrder;
  priority?: SortOrder;
};
