import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryScheduleIssueServiceBase } from "./base/deliveryScheduleIssue.service.base";

@Injectable()
export class DeliveryScheduleIssueService extends DeliveryScheduleIssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
