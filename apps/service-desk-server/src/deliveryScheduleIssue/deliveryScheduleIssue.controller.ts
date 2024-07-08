import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryScheduleIssueService } from "./deliveryScheduleIssue.service";
import { DeliveryScheduleIssueControllerBase } from "./base/deliveryScheduleIssue.controller.base";

@swagger.ApiTags("deliveryScheduleIssues")
@common.Controller("deliveryScheduleIssues")
export class DeliveryScheduleIssueController extends DeliveryScheduleIssueControllerBase {
  constructor(protected readonly service: DeliveryScheduleIssueService) {
    super(service);
  }
}
