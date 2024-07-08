import { SortOrder } from "../../util/SortOrder";

export type DeliveryScheduleIssueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deliveryId?: SortOrder;
  priority?: SortOrder;
  description?: SortOrder;
  reportedBy?: SortOrder;
  status?: SortOrder;
  assignedTo?: SortOrder;
};
