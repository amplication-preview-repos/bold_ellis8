import { Module } from "@nestjs/common";
import { DeliveryScheduleIssueModuleBase } from "./base/deliveryScheduleIssue.module.base";
import { DeliveryScheduleIssueService } from "./deliveryScheduleIssue.service";
import { DeliveryScheduleIssueController } from "./deliveryScheduleIssue.controller";
import { DeliveryScheduleIssueResolver } from "./deliveryScheduleIssue.resolver";

@Module({
  imports: [DeliveryScheduleIssueModuleBase],
  controllers: [DeliveryScheduleIssueController],
  providers: [DeliveryScheduleIssueService, DeliveryScheduleIssueResolver],
  exports: [DeliveryScheduleIssueService],
})
export class DeliveryScheduleIssueModule {}
