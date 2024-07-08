import { EquipmentIssue as TEquipmentIssue } from "../api/equipmentIssue/EquipmentIssue";

export const EQUIPMENTISSUE_TITLE_FIELD = "reportedBy";

export const EquipmentIssueTitle = (record: TEquipmentIssue): string => {
  return record.reportedBy?.toString() || String(record.id);
};
