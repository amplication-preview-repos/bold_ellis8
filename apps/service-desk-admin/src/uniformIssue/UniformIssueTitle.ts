import { UniformIssue as TUniformIssue } from "../api/uniformIssue/UniformIssue";

export const UNIFORMISSUE_TITLE_FIELD = "reportedBy";

export const UniformIssueTitle = (record: TUniformIssue): string => {
  return record.reportedBy?.toString() || String(record.id);
};
