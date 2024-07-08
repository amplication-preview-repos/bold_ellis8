import { SortOrder } from "../../util/SortOrder";

export type UniformIssueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  reportedBy?: SortOrder;
  assignedTo?: SortOrder;
  priority?: SortOrder;
  description?: SortOrder;
  uniformId?: SortOrder;
};
