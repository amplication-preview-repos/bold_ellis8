import { GoodsIssue as TGoodsIssue } from "../api/goodsIssue/GoodsIssue";

export const GOODSISSUE_TITLE_FIELD = "reportedBy";

export const GoodsIssueTitle = (record: TGoodsIssue): string => {
  return record.reportedBy?.toString() || String(record.id);
};
