import { SortOrder } from "../../util/SortOrder";

export type GoodsIssueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  goodsId?: SortOrder;
  priority?: SortOrder;
  status?: SortOrder;
  reportedBy?: SortOrder;
  assignedTo?: SortOrder;
};
