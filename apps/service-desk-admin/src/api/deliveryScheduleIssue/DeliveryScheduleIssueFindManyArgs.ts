import { DeliveryScheduleIssueWhereInput } from "./DeliveryScheduleIssueWhereInput";
import { DeliveryScheduleIssueOrderByInput } from "./DeliveryScheduleIssueOrderByInput";

export type DeliveryScheduleIssueFindManyArgs = {
  where?: DeliveryScheduleIssueWhereInput;
  orderBy?: Array<DeliveryScheduleIssueOrderByInput>;
  skip?: number;
  take?: number;
};
