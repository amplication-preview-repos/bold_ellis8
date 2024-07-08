import { OtherIssue as TOtherIssue } from "../api/otherIssue/OtherIssue";

export const OTHERISSUE_TITLE_FIELD = "reportedBy";

export const OtherIssueTitle = (record: TOtherIssue): string => {
  return record.reportedBy?.toString() || String(record.id);
};
