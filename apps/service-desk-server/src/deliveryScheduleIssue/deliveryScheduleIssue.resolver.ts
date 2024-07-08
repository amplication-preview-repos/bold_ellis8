import * as graphql from "@nestjs/graphql";
import { DeliveryScheduleIssueResolverBase } from "./base/deliveryScheduleIssue.resolver.base";
import { DeliveryScheduleIssue } from "./base/DeliveryScheduleIssue";
import { DeliveryScheduleIssueService } from "./deliveryScheduleIssue.service";

@graphql.Resolver(() => DeliveryScheduleIssue)
export class DeliveryScheduleIssueResolver extends DeliveryScheduleIssueResolverBase {
  constructor(protected readonly service: DeliveryScheduleIssueService) {
    super(service);
  }
}
