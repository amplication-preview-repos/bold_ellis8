import { GoodsIssueWhereInput } from "./GoodsIssueWhereInput";
import { GoodsIssueOrderByInput } from "./GoodsIssueOrderByInput";

export type GoodsIssueFindManyArgs = {
  where?: GoodsIssueWhereInput;
  orderBy?: Array<GoodsIssueOrderByInput>;
  skip?: number;
  take?: number;
};
