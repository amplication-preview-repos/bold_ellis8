import { DeliveryScheduleIssue as TDeliveryScheduleIssue } from "../api/deliveryScheduleIssue/DeliveryScheduleIssue";

export const DELIVERYSCHEDULEISSUE_TITLE_FIELD = "reportedBy";

export const DeliveryScheduleIssueTitle = (
  record: TDeliveryScheduleIssue
): string => {
  return record.reportedBy?.toString() || String(record.id);
};
