import { SortOrder } from "../../util/SortOrder";

export type EquipmentIssueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  reportedBy?: SortOrder;
  assignedTo?: SortOrder;
  equipmentId?: SortOrder;
  priority?: SortOrder;
  status?: SortOrder;
};
