import { EquipmentIssueWhereInput } from "./EquipmentIssueWhereInput";
import { EquipmentIssueOrderByInput } from "./EquipmentIssueOrderByInput";

export type EquipmentIssueFindManyArgs = {
  where?: EquipmentIssueWhereInput;
  orderBy?: Array<EquipmentIssueOrderByInput>;
  skip?: number;
  take?: number;
};
